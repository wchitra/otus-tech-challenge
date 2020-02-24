import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ClassesService } from './core/services/classes.service';
import { StudentModule } from './students/student.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    StudentModule // module containing the student components
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [ClassesService],
      multi: true
    },
    { provide: ErrorHandler }
  ]
})
export class AppModule { }

export function initFactory(provider: any) {
  return () => provider.init();
}
