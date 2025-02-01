import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from '../service/jwt.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit {
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
