import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../interfaces/Course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses:Course[]=[];

  constructor(private http:HttpClient) { 
  }

  getCourses(){
    return this.http.get('http://localhost:3000/courses');
  }
}
