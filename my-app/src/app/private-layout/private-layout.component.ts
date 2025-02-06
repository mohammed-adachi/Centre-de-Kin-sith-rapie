// private-layout.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { JwtService } from '../service/jwt.service';
// import { AuthService } from '../auth.service';

@Component({
  selector: 'app-private-layout',
  standalone: true,
  templateUrl: './private-layout.component.html',
  imports: [RouterOutlet,RouterModule, RouterLink],
  styleUrls: ['./private-layout.component.css'],
})
export class PrivateLayoutComponent  implements OnInit  {
  imagePath: string = "../assets/images/image.png";
  // constructor(private authService: AuthService) {}

  // logout(): void {
  //   this.authService.logout();
  // }


   constructor(
     private userAuthService: JwtService,
     private router: Router,
   ) {}

   ngOnInit(): void {}

   public isLoggedIn() {
     return this.userAuthService.isLoggedIn();
   }

   public logout() {
     this.userAuthService.clear();
     this.router.navigate(['/login']);
   }
 }

