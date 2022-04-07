import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/interfaces/Course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[];

  constructor(private _courseService:CoursesService) { 
    this.courses= _courseService.getCourses();
    console.log(this.courses);
    
  }

  ngOnInit(): void {
  }

}
