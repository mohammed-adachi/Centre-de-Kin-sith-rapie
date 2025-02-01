import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JwtService } from '../../service/jwt.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  imagePath: string = "../assets/images/prodigy_infotech_logo.jpg";
  loginForm!: FormGroup;
  errorMessage: string = ''; // Pour afficher les messages d'erreur

  constructor(
    private service: JwtService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.loginForm.valid) {
      const formValues = this.loginForm.value;

      // Options HTTP avec en-tête Content-Type
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      console.log(formValues);

      // Appeler le service de connexion
      this.service.login(formValues, httpOptions).subscribe({
        next: (response) => {

          if (response.token && response.user && response.user.username && response.user.role) {
            console.log(response);
            const jwtToken = response.token;
            const role =response.roles
            localStorage.setItem('token', jwtToken);
            localStorage.setItem('roles', role); // Convertir en tableau
            if (response.roles === 'DOCTOR') {
              localStorage.setItem('isAdmin', 'true');
              this.router.navigate(['/fiche']);
            } else {
              localStorage.setItem('isAdmin', 'false');
              this.router.navigate(['/dashbord']);
            }

          } else {
            // Si la réponse ne contient pas de nom d'utilisateur, afficher une erreur
            this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect.';
          }
        },
        error: (error) => {
          // En cas d'erreur HTTP, afficher un message d'erreur
          this.errorMessage = 'Une erreur s\'est produite. Veuillez réessayer.';
          console.error('Erreur de connexion :', error);
        }
      });
    } else {
      // Si le formulaire est invalide, afficher un message d'erreur
      this.errorMessage = 'Veuillez remplir tous les champs obligatoires.';
    }
  }
}
