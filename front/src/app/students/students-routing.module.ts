import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search';
import {
  DetailsComponent,
  ClassesResolver,
  StudentResolver
} from './details';
import { NgModule } from '@angular/core';

/**
 * Routes within the student module.
 * ** Note: Resolver are used to retrieve data before the page load.
 * https://angular.io/guide/router#resolve-guard
 * https://angular.io/api/router/Resolve
 */
const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: ':id',
    component: DetailsComponent,
    resolve: {
      classes: ClassesResolver,
      student: StudentResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StudentRoutingModule { }
