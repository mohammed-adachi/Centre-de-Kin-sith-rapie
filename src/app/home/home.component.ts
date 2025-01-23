import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import the Router

@Component({
  selector: 'app-home',
  standalone : false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Inject Router service into the component's constructor
  constructor(private router: Router) {}

  // Method to navigate to login
  goToLogin() {
    this.router.navigate(['/login']);  // Navigate to the login page
  }
}
