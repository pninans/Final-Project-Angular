import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './modules/components/login/login.component';
import { AllCoursesComponent } from './modules/components/all-courses/all-courses.component';
import { RegisterComponent } from './modules/components/register/register.component';
import { AddCourseComponent } from './modules/components/add-course/add-course.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './modules/components/logout/logout.component';
import { CourseDetailsComponent } from './modules/components/course-details/course-details.component';
import { EditCourseComponent } from './modules/components/edit-course/edit-course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AllCoursesComponent,
    RegisterComponent,
    AddCourseComponent,
    LogoutComponent,
    CourseDetailsComponent,
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'allCourses', component: AllCoursesComponent },
      { path: 'addCourse', component: AddCourseComponent },
      {path:'register',component:RegisterComponent},
      {path:'logout',component:LogoutComponent},
      // {path:'courseDetails/:code',component:CourseDetailsComponent}
      // ניתן להוסיף נתיבים נוספים כרצונך
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
