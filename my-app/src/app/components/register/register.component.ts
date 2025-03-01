import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JwtService } from '../../service/jwt.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
 templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup
  formResult: string = "";

  constructor(
    private service: JwtService,
    private fb: FormBuilder,
    private router: Router
  ) { }
  /*registers() {
    const userData = {
      "username": "admin",
      "role": "user",
      "email": "omar.adachi@usmba.ac.ma",
      "password": "44556677"
    };
    this.service.register(userData).subscribe(
      response => {
        console.log('Inscription réussie:', response);
      },
      error => {
        console.error('Erreur lors de l\'inscription:', error);
      }
    );
  }
*/
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      role: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    }, { validator: this.passwordMathValidator })
}

  passwordMathValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password != confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
  }
  }


  submitForm() {
    if (this.registerForm.valid) {
      const formValues = this.registerForm.value; // L'objet JavaScript

      // Options HTTP avec en-tête Content-Type
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
    this.service.register(
      formValues, httpOptions
    ).subscribe({
      next: (response) => {
        console.log(response); // Vérifie la réponse

          alert("Inscription réussie !");
          this.router.navigate(['/login']);

      },
      error: (error) => {
        console.error("Erreur lors de l'enregistrement :", error);
      },
      complete: () => {
        console.log("Souscription terminée.");
      }
    }
    )
  }

  }



}
