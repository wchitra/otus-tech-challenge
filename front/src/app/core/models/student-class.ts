import { Class } from './class';

/**
 * Model for the student-class relationship
 */
export class StudentClass {
  id: number; // actually the class id, not StudentClass id, for mapping...
  class: Class;
  grade: number;
}
