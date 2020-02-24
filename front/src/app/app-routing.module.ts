import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Routing and defining different modules in the application.
 * https://angular.io/guide/styleguide#feature-modules
 */
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./students/student.module').then(m => m.StudentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
