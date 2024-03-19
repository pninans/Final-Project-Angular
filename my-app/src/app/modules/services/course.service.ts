
import { Injectable } from "@angular/core";
import { Course } from "../models/course.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CourseService {

  constructor(private _http: HttpClient) {}
//server
  getCoursesFromServer(): Observable<Course[]> {
    return this._http.get<Course[]>("api/Course");
  }
//server
  updateCourse(course: Course): Observable<Course> {
  // Construct the complete URL including the query parameter
  const url = `/api/Course?code=${course.code}`;

  // Use the course object as the request body
  return this._http.put<Course>(url, course).pipe(
    tap(updatedCourse => console.log('Course updated successfully:', updatedCourse))
  );
}
 //server
 addCourseToServer(course: Course): Observable<Course> {
   console.log(course);
 course.category.name="";
 course.category.iconRoute="";
 course.category.code=1;
 if (course.startDate) {
  course.startDate = new Date(course.startDate).toISOString(); // Convert to ISO string format
}
  return this._http.post<Course>("/api/Course/", course);
}

}