import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Student, StudentsService } from '../../core';

@Component({
  selector: 'app-student-search',
  templateUrl: 'search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public students$: Observable<Student[]>;

  public searchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private searchService: StudentsService) {

    // init in constructor instead of onInit, just in case someone decides to implement OnChanges
    // and do some work with values in the form, only to get undefined errors
    this.searchForm = this.formBuilder.group({
      firstName: [''],
      lastName: ['']
    });
  }

  /**
   * Disable search if there is no values in first and last name fields
   */
  public disableSearch(): boolean {
    const name = this.searchForm.get('firstName').value || this.searchForm.get('lastName').value;
    return name === '';
  }

  /**
   * Search for students by name
   */
  public search(): void {
    if (!this.disableSearch()) { // double checking

      const firstName = this.searchForm.get('firstName').value;
      const lastName = this.searchForm.get('lastName').value;

      // better to assign the observable to the list to be displayed so that
      // the framework will handle unsubscribing instead of having to do it manually
      this.students$ = this.searchService.getStudents(firstName, lastName);
    }
  }
}
