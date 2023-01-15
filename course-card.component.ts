import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course,suzi } from '../model/course';


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  constructor() {}

 // @Input()
 // title:string=' '; // ova e title od tip string
  

  @Input()
   crs:Course = suzi;  // ova |undefined ne treba voobichaeno ama ima problem
  
  @Output()
  cuci=new EventEmitter()

  @Input()
  indeks:number = 0;

  @Output()
  suzi = new EventEmitter<Course>();


  ngOnInit(){

  }

  onCrsViewed(){
    console.log("cuci is suzi");
    this.suzi.emit(this.crs);
  }

  klasi() {
    if (this.crs.category == 'BEGINNER') {
      return { 'begin': true, 'course-card': true }
    } else if (this.crs.category == 'ADVANCED') {
      return { 'advanced': true, 'course-card': true } 
    } else {
      return { 'course-card': true }
    }
  }

  stilovikartichka() {
    if (this.crs.category == 'INTERMEDIATE') {
      return { 'background-image': 'url(' + this.crs.iconUrl + ')' }
    } else {
      return null;
    }
  }

  stilovinaslov() {
    return { 'background-color': 'gray', 'font-style': 'italic' }
  }



}
