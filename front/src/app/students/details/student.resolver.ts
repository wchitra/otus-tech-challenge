import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Student } from '../../core/models/student';
import { StudentsService } from '../../core/services/students.service';

/**
 * Get student before loading the details page
 */
@Injectable({
  providedIn: 'root'
})
export class StudentResolver implements Resolve<Student> {

  constructor(private studentsService: StudentsService) { }

  public resolve(route: ActivatedRouteSnapshot) {
    return this.studentsService.getStudentById(route.params.id);
  }

}
