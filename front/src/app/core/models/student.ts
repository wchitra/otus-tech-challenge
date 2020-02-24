import { StudentClass } from './student-class';

/**
 * Class for the student model
 */
export class Student {

  id: string;
  first: string;
  last: string;
  gpa: number;
  email: string;
  studentClasses: StudentClass[] = [];

  static fromJson(json: any): Student {
    const obj = Object.create(Student.prototype);
    Object.assign(obj, json);
    return obj;
  }
}
