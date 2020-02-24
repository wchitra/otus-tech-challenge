import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Class } from '../../core/models/class';
import { ClassesService } from '../../core/services/classes.service';

/**
 * Get classes before loading the details page
 */
@Injectable({
  providedIn: 'root'
})
export class ClassesResolver implements Resolve<Class[]> {

  constructor(private classesService: ClassesService) { }

  public resolve() {
    return this.classesService.getClasses();
  }

}
