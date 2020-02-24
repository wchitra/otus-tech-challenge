import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details';
import { SearchComponent } from './search';
import { StudentRoutingModule } from './students-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StudentRoutingModule
  ],
  declarations: [
    DetailsComponent,
    SearchComponent
  ],
  exports: [
    DetailsComponent,
    SearchComponent
  ]
})

/**
 * Module for the student features of the application.
 */
export class StudentModule { }
