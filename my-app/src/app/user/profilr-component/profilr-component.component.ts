import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { user } from '../../shared/models';
import { JwtService } from '../../service/jwt.service';
import { ServiceCompletService } from '../../service-complet.service';
@Component({
  selector: 'app-profilr-component',
  standalone: true,
  imports: [CommonModule,ButtonModule  ],
  templateUrl: './profilr-component.component.html',
  styleUrl: './profilr-component.component.css'
})
export class ProfilrComponentComponent implements OnInit {
  user:user=new user();
id : number;
   // Initialisation du terme de recherche
  userRole: string | null = null;

  constructor(
    private employeeService: ServiceCompletService,
    private router: Router,
    private service: JwtService,
    private route: ActivatedRoute,
  ) {
    this.id=0;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userRole = localStorage.getItem('roles');
    this.getProfile();
  }

  getProfile() {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getCurrentUser(this.id).subscribe({
      next: (response) => {
        this.user = response;
        console.log(this.user); // Vérifie la réponse

    }});
  }






  // La méthode de filtrage est désormais déclenchée à chaque changement de recherche


}
