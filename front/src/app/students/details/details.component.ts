import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Class, Student } from '../../core/';

@Component({
  selector: 'app-student-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  // initialize student, so won't get undefined errors when the applications is loading
  public student: Student = new Student();

  // initialize classes, so won't get undefined errors when the applications is loading
  private classes: Class[] = [];

  constructor(private route: ActivatedRoute) { }

  public ngOnInit(): void {

    // framework will handle unsubscribing on route related subscriptions
    this.route.data.subscribe(data => {
      this.classes = data.classes;
      this.student = data.student;

      // mapping classes to the student-class relationship in the student model
      this.student.studentClasses.forEach(stdntCls => {
        stdntCls.class = this.classes.find(cls => cls.id === stdntCls.id);
      });
    });
  }
}
