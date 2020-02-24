import { DebugElement } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { SearchComponent } from './search.component';
import { StudentsService, Student } from '../../core';

let studentsService: Partial<StudentsService>;
let students = [
  new Student(),
  new Student()
];

studentsService = {
  getStudentById: (id: string) => of(new Student()),
  getStudents: (firstName?: string, lastName?: string) => of(students)
};

describe('Student Search Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [
        SearchComponent
      ],
      providers: [{ provide: StudentsService, useValue: studentsService }]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SearchComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`'Submit' is disabled`, () => {
    const fixture = TestBed.createComponent(SearchComponent);
    const app = fixture.componentInstance;
    expect(app.disableSearch()).toBeTrue();
  });

  it(`Enable submit for first & last name`, () => {
    const fixture = TestBed.createComponent(SearchComponent);
    const app = fixture.componentInstance;

    // Test just the first name
    app.searchForm.get('firstName').setValue('Jo');
    expect(app.disableSearch()).toBeFalse();

    // Test just the first & last name
    app.searchForm.get('lastName').setValue('Jo');
    expect(app.disableSearch()).toBeFalse();

    // Reset form
    app.searchForm.setValue({ firstName: '', lastName: '' });
    expect(app.disableSearch()).toBeTrue();

    // Test just the last name
    app.searchForm.get('lastName').setValue('Jo');
    expect(app.disableSearch()).toBeFalse();
  });

  it(`Search for student, get results`, () => {
    const fixture = TestBed.createComponent(SearchComponent);
    const app = fixture.componentInstance;

    // Test just the first name
    app.searchForm.get('firstName').setValue('Jo');
    expect(app.disableSearch()).toBeFalse();
    app.search();
    app.students$.subscribe(stndts => expect(stndts.length).toEqual(students.length));

  });

  it(`Search for student, empty results`, () => {
    const fixture = TestBed.createComponent(SearchComponent);
    const app = fixture.componentInstance;

    // set the mock list to an empty array
    students = [];

    app.searchForm.get('firstName').setValue('Jo');
    expect(app.disableSearch()).toBeFalse();
    app.search();
    app.students$.subscribe(stndts => expect(stndts.length).toEqual(0));

    // update the UI
    fixture.detectChanges();

    // find the table cell with the not found message
    const debugElement: DebugElement = fixture.debugElement;
    const cell = debugElement.query(By.css('.not-found'));
    const element: HTMLElement = cell.nativeElement;

    expect(element.textContent).toEqual('Student not found.');
  });
});
