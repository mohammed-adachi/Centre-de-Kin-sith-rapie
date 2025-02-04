// private-layout.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
// import { AuthService } from '../auth.service';

@Component({
  selector: 'app-private-layout',
  standalone: true,
  templateUrl: './private-layout.component.html',
  imports: [RouterOutlet,RouterModule, RouterLink],
  styleUrls: ['./private-layout.component.css'],
})
export class PrivateLayoutComponent {
  imagePath: string = "../assets/images/image.png";
  // constructor(private authService: AuthService) {}

  // logout(): void {
  //   this.authService.logout();
  // }
}
