import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../domain/course';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public url: string;

  constructor(public httpClient: HttpClient) { 
    // this.url = './assets/MOCK_DATA.json';
    this.url = 'http://localhost/University.API/api/Courses/';
  }

  public getAll(): Observable<any>{
    return this.httpClient.get(this.url);
  }

  public getById(id: number): Observable<any>{
    return this.httpClient.get(this.url + id);
  }

  public save(course: Course): Observable<any>{
    return this.httpClient.post(this.url, course);
  }

  public edit(course: Course): Observable<any>{
    return this.httpClient.put(this.url + course.CourseID, course);
  }
}
