import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceCompletService } from '../../service-complet.service';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { fiche_medical } from '../../shared/models';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-update-fiche-medicalby-id',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './update-fiche-medicalby-id.component.html',
  styleUrl: './update-fiche-medicalby-id.component.css'
})
export class UpdateFicheMedicalbyIdComponent implements OnInit {
  updatePaymentForm!: FormGroup;
  formResult: string = "";
id:number;
patient:fiche_medical=new fiche_medical();
  constructor(
    private service: ServiceCompletService, // Remplacez `EmployeeService` par le service pour les patients.
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.id=0;

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.updatePaymentForm = this.fb.group({
      description: ['', Validators.required],


    });
  }

  submitForm() {
    console.log("Soumission du formulaire");

    const formValues = this.updatePaymentForm.value;
    console.log(formValues);

    // Options HTTP avec en-tête Content-Type
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.service.updateFiche(this.id,formValues ).subscribe({
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
    });
  }
  goTopatient(): void {
    this.router.navigateByUrl('/patient').then(success => {
      if (success) {
        console.log('Redirection vers /login réussie');
      } else {
        console.error('Échec de la redirection vers /login');
      }
    });}


}

