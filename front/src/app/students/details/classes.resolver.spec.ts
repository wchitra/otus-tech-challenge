import { of } from 'rxjs';
import { Class, ClassesService } from '../../core';
import { ClassesResolver } from './classes.resolver';

let httpClientSpy: { get: jasmine.Spy };
let classesService: ClassesService;
let resolver: ClassesResolver;

beforeEach(() => {
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  classesService = new ClassesService(httpClientSpy as any);
  resolver = new ClassesResolver(classesService);
});

it('should return classes', () => {
  const expectedClasses: Class[] =
    [{ id: 1, name: 'Class A' }, { id: 2, name: 'Class B' }];

  httpClientSpy.get.and.returnValue(of(expectedClasses));

  resolver.resolve()
    .subscribe(clsses => expect(clsses).toEqual(expectedClasses),
      fail);

  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
});
