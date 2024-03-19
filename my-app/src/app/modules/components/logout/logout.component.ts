// logout.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  successMessage: string;
  constructor(private router: Router) { 
    this.successMessage = 'User already exists.';
    sessionStorage.removeItem('username'); // מחיקת שם המשתמש מ- sessionStorage
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('code');
    sessionStorage.removeItem('isInstructor');

    // הפעלת setTimeout לאחר 2 שניות והניווט לדף הבית
    setTimeout(() => {
      this.router.navigate(['/']); // מעבר לדף הבית
    }, 2000); // זמן המתנה במילישניות
  }
}
