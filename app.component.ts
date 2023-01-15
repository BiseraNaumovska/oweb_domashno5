import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 // coreCourse=COURSES[0];
 // RxJs=COURSES[1];
 // NgJs=COURSES[2];
  
  kursevi = COURSES;

  onAppViewed(kurs:Course){
    console.log("App is not Cuci", kurs);
  }


}
