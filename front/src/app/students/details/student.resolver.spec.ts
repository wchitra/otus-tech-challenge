import { ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { Student, StudentsService } from '../../core';
import { StudentResolver } from './student.resolver';

let httpClientSpy: { get: jasmine.Spy };
let studentsService: StudentsService;
let resolver: StudentResolver;
let route: ActivatedRouteSnapshot;

beforeEach(() => {
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  studentsService = new StudentsService(httpClientSpy as any);
  resolver = new StudentResolver(studentsService);
  route = new ActivatedRouteSnapshot();
  route.params = { id: '1' };
});

it('should return selected student', () => {
  const student: Student = new Student();
  student.id = '1';
  student.first = 'Jimmy';
  student.last = 'Johnson';

  httpClientSpy.get.and.returnValue(of(student));

  resolver.resolve(route).subscribe(
    stdnt => expect(stdnt.id).toEqual(student.id),
    fail
  );

  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
});
