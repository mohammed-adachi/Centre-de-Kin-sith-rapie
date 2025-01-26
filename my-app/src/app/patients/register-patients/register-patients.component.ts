import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceCompletService } from '../../service-complet.service';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-patients',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-patients.component.html',
})
export class RegisterPatientsComponent implements OnInit {
  registerForm!: FormGroup;
  formResult: string = "";

  constructor(
    private service: ServiceCompletService, // Remplacez `EmployeeService` par le service pour les patients.
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      adress: ['', Validators.required],
      telephone: [
        '',
        [Validators.required, Validators.pattern("^[0-9]{10}$")] // Validation pour un numéro à 10 chiffres.
      ]
    });
  }

  submitForm() {
    console.log("Soumission du formulaire");

    const formValues = this.registerForm.value;
    console.log(formValues);

    // Options HTTP avec en-tête Content-Type
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.service.register_patients(formValues, httpOptions).subscribe({
      next: (response) => {
        console.log(response); // Vérifie la réponse
        if (response.name != null) {
          alert("Bonjour " + response.name + ", vos informations ont été enregistrées avec succès !");
        }
      },
      error: (error) => {
        console.error("Erreur lors de l'enregistrement :", error);
      },
      complete: () => {
        console.log("Souscription terminée.");
      }
    }
  );
  }
  goTopatient(): void {
    this.router.navigateByUrl('/patient').then(success => {
      if (success) {
        console.log('Redirection vers /login réussie');
      } else {
        console.error('Échec de la redirection vers /login');
      }
    });
  }

}
