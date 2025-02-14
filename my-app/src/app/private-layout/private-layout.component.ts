// private-layout.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { JwtService } from '../service/jwt.service';
import { CommonModule } from '@angular/common';
import { user } from '../shared/models';
import { ServiceCompletService } from '../service-complet.service';
// import { AuthService } from '../auth.service';

@Component({
  selector: 'app-private-layout',
  standalone: true,
  templateUrl: './private-layout.component.html',
  imports: [RouterOutlet,RouterModule, RouterLink,CommonModule],
  styleUrls: ['./private-layout.component.css'],
})
export class PrivateLayoutComponent  implements OnInit  {
  imagePath: string = "../assets/images/image.png";
  userId: number | null = null;
  userId1: number | null = null;
  user!: user;

 EnteredID!:number;
 id:number;


  // logout(): void {
  //   this.authService.logout();
  // }
  isDropdownOpen = false; // Initialisation de la variable

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
    // Inverser l'état du menu
  }
  closeDropdownOnClickOutside(event: Event) {
    const dropdown = document.querySelector('.dropdown-menu'); // Sélectionne le menu
    if (dropdown && !dropdown.contains(event.target as Node)) {
      this.isDropdownOpen = false; // Ferme uniquement si le clic est en dehors
    }
  }

  closeDropdown() {
    this.isDropdownOpen = false; // Fermer le menu
  }

// getuser(id:number){
//   this.employeeService.getUsersBy(id).subscribe(data => {
//     this.user = data;
//   });
// }

   constructor(
     private userAuthService: JwtService,
     private router: Router,
     private employeeService: ServiceCompletService,
         private service: JwtService,
           private route: ActivatedRoute,
   ) {
    this.id=0
   }


   getIdUser(){
    this.employeeService.getCurrentUser(this.id).subscribe((data) => {
      this.user = data;  
    });
   }

   ngOnInit(): void {
    const storedUserId = localStorage.getItem("userId");

    this.userAuthService.getUserId()
    console.log("mmmmmmcvvcfgfdf",this.userAuthService.getUserId())
    // this.userId = this.userAuthService.getUserId();
    // console.log("mmmmmmcvvcfgfdf",this.userId)
    this.userId=storedUserId ? parseInt(storedUserId) : null;
    console.log("mmmmmmcvvcfgfdf",this.userId)
  }

    // this.employeeService.getCurrentUser(this.id).subscribe((data) => {
    //   this.user = data;  // ✅ Assigne la donnée reçue à `this.user`
    //   console.log("User récupéré :", this.user.id);
    // });
    // this.id=this.user.id
    // this.user;
    // document.addEventListener('click', this.closeDropdownOnClickOutside.bind(this));



   public isLoggedIn() {
     return this.userAuthService.isLoggedIn();
   }

   public logout() {
     this.userAuthService.clear();
     this.router.navigate(['/login']);
   }
 }


