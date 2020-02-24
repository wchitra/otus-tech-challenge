import { of } from 'rxjs';
import { ClassesService } from './classes.service';
import { Class } from '../models';

let httpClientSpy: { get: jasmine.Spy };
let classesService: ClassesService;

beforeEach(() => {
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  classesService = new ClassesService(httpClientSpy as any);
});

it('should return classes', () => {
  const expectedClasses: Class[] =
    [{ id: 1, name: 'Class A' }, { id: 2, name: 'Class B' }];

  httpClientSpy.get.and.returnValue(of(expectedClasses));

  classesService.getClasses().subscribe(
    clsses => expect(clsses).toEqual(expectedClasses),
    fail
  );

  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
});
