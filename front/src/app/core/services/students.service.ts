import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private readonly STUDENTS_URL = 'http://localhost:3000/api/students';

  constructor(private http: HttpClient) { }

  public getStudentById(id: string): Observable<Student> {
    return this.http.get<any>(this.STUDENTS_URL.concat(`/${id}`))
      .pipe(
        map((stdnt: any) => {
          return Student.fromJson(stdnt);
        }));
  }

  public getStudents(firstName = '', lastName = ''): Observable<Student[]> {

    const url = this.buildUrlWithQueryParams(firstName, lastName);

    return this.http.get<any[]>(url)
      .pipe(
        map((stdents: any) => {
          return stdents.map((s: any) => Student.fromJson(s));
        }),
        share()
      );
  }

  private buildUrlWithQueryParams(firstName: string, lastName: string): string {

    const query = [];
    if (firstName) {
      query.push(`first=${firstName}`);
    }

    if (lastName) {
      query.push(`last=${lastName}`);
    }

    let url = this.STUDENTS_URL;
    if (query.length !== 0) {
      url = url.concat(`?${query.join('&')}`);
    }

    return url;
  }
}
