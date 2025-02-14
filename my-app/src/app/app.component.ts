import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive,FullCalendarModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'my-app';
  imagePath: string="assets/images/image.png";
  constructor(private router: Router) {}

  isAuthPage(): boolean {
    return this.router.url === '/login' || this.router.url === '/register';
  }
}
