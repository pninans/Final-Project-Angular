
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../models/category.model';
import { Course ,LearningMode} from '../../models/course.model';
import { CourseService } from '../../services/course.service';
import { UsersService } from '../../services/user.service';
import { User } from '../../models/user.model';
@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
@Injectable()
export class AllCoursesComponent {

@Input()
selectedCourse:Course |undefined;
searchText: string = "";
searchText2: string = "";
courses: Course[] =[];
filteredCourses: Course[] = [];
categories: string[] = [];
nameFilter: string = '';
categoryFilter: string = '';
learningModeFilter: string = '';
selectedCategory: string = ''; // או כל ערך מתאים לסוג הנבחר
users:User[];
userName:string;

constructor(private _userService:UsersService ,private _courseService:CourseService,private router: Router){
  this.getCourses();
  _userService.getUserFromServer().subscribe(data => {
    this.users = data;
  })
}

showCourse(selectedCourse:Course){
 this.selectedCourse=selectedCourse;
}

getCourses(){
  console.log("enter to get courses!");
   this._courseService. getCoursesFromServer().subscribe(
  data=>{
    data.map(x=>console.log(x.code +"❤️"));
    this.courses=data;
    this.filteredCourses = this.courses;
  },
  error =>{
    console.error('Error fetching courses: ' ,error);
  }
);
}

addCourseToList(){
  if(sessionStorage.getItem("username"))
    {
      //רק מרצה יכול להוסיף קורס
      this.userName=sessionStorage.getItem("username");
     if(this.users.find(user => user.name ===  this.userName&&user.isInstructor))
       { 
        this.router.navigate(['/addCourse']);
       }
     else
       {
         alert("Sorry, adding a course is only allowed for lecturers")
       }

    }
    else
    { 
       this.router.navigate(['/login']);
    }
}

handleSearch(event: Event) {
  // המתנה 300 מילי-שניות (0.3 שניות) לכל קלידה
  setTimeout(() => {
    // בדיקה שהערך לא יבוצע סינון אם זהו ערך זהה לערך הקודם
    if (this.searchText === (event.target as HTMLInputElement).value) {
      // סינון הסטודנטים לפי מילת החיפוש
      this.filteredCourses = this.courses.filter(course =>
        course.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }, 300);
}

handleSearch2(event: Event) {
  setTimeout(() => {
    const searchText2 = (event.target as HTMLInputElement).value.toLowerCase();
    if (!searchText2) { // אם החיפוש ריק
      this.filteredCourses = this.courses; // תציג שוב את כל הקורסים
      return;
    }
    if (this.searchText2 === searchText2) {
      this.filteredCourses = this.courses.filter(course =>
        course.learningMode === this.getLearningModeFromString(searchText2)
      );
    }
  }, 300);
}


getLearningModeFromString(searchText: string): LearningMode | string {
  switch (searchText.toLowerCase()) {
    case 'zoom':
      return LearningMode.Zoom;
    case 'frontal':
      return LearningMode.Frontal;
    default:
      return "No matching results found";
  }
}


handleCategoryChange(event: any) {
  const selectedCategory = event.value;
  if (!selectedCategory) {
    this.filteredCourses = this.courses;
    return;
  }
  this.filteredCourses = this.courses.filter(course =>
    course.category.name.toLowerCase().includes(selectedCategory.toLowerCase())
  );
}

getUniqueCategories(): Category[] {
  const categories: Category[] = [];
  this.courses.forEach(course => {
    if (!categories.some(cat => cat.name === course.category.name)) {
      categories.push(course.category);
    }
  });
  return categories;
}


}
