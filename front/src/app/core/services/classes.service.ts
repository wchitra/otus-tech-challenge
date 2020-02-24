import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BootstrapService } from './bootstrap.service';
import { Class } from '../models/class';
import { publishReplay, refCount } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClassesService implements BootstrapService {

  private readonly CLASS_API_URL = 'http://localhost:3000/api/classes';

  private classes: Observable<Class[]>;

  constructor(private http: HttpClient) { }

  public init(): Promise<any> {
    return this.getClasses().toPromise();
  }

  public getClasses(): Observable<Class[]> {
    if (!this.classes) {
      this.classes = this.http.get<Class[]>(this.CLASS_API_URL)
        .pipe(
          publishReplay(1),
          refCount()
        );
    }

    return this.classes;
  }
}
