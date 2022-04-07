import { Injectable } from '@angular/core';
import { Course } from '../interfaces/Course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses:Course[]=[];

  constructor() { 
    this.courses=[
      {id:1, name:'Course1', desc:"lorem ipsum",isActive:true,price:100,updatedAt:new Date('2022-04-04')},
      {id:2, name:'Course2', desc:"dolores sumir",isActive:true,price:200,updatedAt:new Date('2022-04-05')}
    ]
  }

  getCourses(){
    return this.courses;

  }
}
