import { of } from 'rxjs';
import { StudentsService } from './students.service';
import { Student } from '../models';

let httpClientSpy: { get: jasmine.Spy };
let studentsService: StudentsService;

beforeEach(() => {
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  studentsService = new StudentsService(httpClientSpy as any);
});

it('should return students', () => {
  const students: Student[] =
    [
      new Student(),
      new Student()
    ];

  httpClientSpy.get.and.returnValue(of(students));

  studentsService.getStudents().subscribe(
    stdnts => expect(stdnts.length).toEqual(students.length),
    fail
  );

  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
});

it('should return selected student', () => {
  const student: Student = new Student();
  student.id = '1';
  student.first = 'Jimmy';
  student.last = 'Johnson';

  httpClientSpy.get.and.returnValue(of(student));

  studentsService.getStudentById('1').subscribe(
    stdnt => expect(stdnt.id).toEqual(student.id),
    fail
  );

  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
});
