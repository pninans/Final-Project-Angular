import { Component ,  Input, OnInit, NgModule, Output, EventEmitter} from '@angular/core';
import { Course,LearningMode } from '../../models/course.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { UsersService } from '../../services/user.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  id: number;
  constructor(private courseService:CourseService,private _userService: UsersService,private route: ActivatedRoute) { }
  @Input() 
  course: Course; 
  @Input()
  showCourseDetails=false;
  @Input()
  editCourse=false;


  check(): boolean {
    const userCode = sessionStorage.getItem("code");
    const userBool= sessionStorage.getItem("isInstructor");
    if(this.course.instructorCode==userCode&&userBool=="true")
       return true;
    else
    return false;
  }
    toggleCourseDetails(){
 
    this.showCourseDetails = !this.showCourseDetails; 
  }
  showEditComponent() {
    this.editCourse = !this.editCourse;
  }
 
  isDateInNextWeek(startDate: string): boolean {
    const startDateAsDate = new Date(startDate);
    const now = new Date();
    const nextWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7);
    return startDateAsDate >= now && startDateAsDate <= nextWeek;
  }
  

 @Output()
  OnFocusCourse: EventEmitter<any> = new EventEmitter();
focusCourse: boolean = false;
cancelEditingHandler() {
  this.editCourse = false; 
}
handleFocus()
{
  if (!this.focusCourse) {
    this.OnFocusCourse.emit();
    this.focusCourse = true;
  }
}

navigateToCourseDetails():boolean {
  //ניווט רק אם ביצע כניסה לאתר
   if(sessionStorage.getItem("username"))
     {
      return true;  
    }
   else
     { 
       return false; 
    }
}
isFrontalMode(learningMode: LearningMode): boolean {
  return learningMode === LearningMode.Frontal;
}

isZoomMode(learningMode: LearningMode): boolean {
  return learningMode === LearningMode.Zoom;
}
  ngOnInit(): void {
    
  }
}

