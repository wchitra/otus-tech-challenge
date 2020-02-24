import { TestBed, async } from '@angular/core/testing';
import { ActivatedRoute, Data } from '@angular/router';
import { DetailsComponent } from './details.component';
import { Student } from '../../core';

const stdent = new Student();
stdent.id = '1';
stdent.first = 'Randy';
stdent.last = 'Moss';
stdent.email = 'randy.moss@49touchdowns.com';
stdent.gpa = 2.5;
stdent.studentClasses = [
  {
    id: 1,
    class: null,
    grade: 3
  },
  {
    id: 2,
    class: null,
    grade: 2
  }
];

const clsses = [{ id: 1, name: 'Class A' }, { id: 2, name: 'Class B' }];

describe('Student Details Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DetailsComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: {
              subscribe: (fn: (value: Data) => void) => fn({
                classes: clsses,
                student: stdent
              })
            }
          }
        }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DetailsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as got data from resolver`, () => {
    const fixture = TestBed.createComponent(DetailsComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    const stdnt = app.student;
    expect(stdnt).toEqual(stdent);
    expect(stdnt.email).toEqual(stdent.email);

    const cls = stdnt.studentClasses.find(c => c.id === 1);
    expect(cls.class.name).toEqual(clsses.find(c => c.id === 1).name);
  });
});
