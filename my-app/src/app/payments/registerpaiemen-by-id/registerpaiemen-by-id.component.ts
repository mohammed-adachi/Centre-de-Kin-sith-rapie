import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceCompletService } from '../../service-complet.service';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { Payment } from '../../shared/models';

@Component({
  selector: 'app-registerpaiemen-by-id',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './registerpaiemen-by-id.component.html',
  styleUrl: './registerpaiemen-by-id.component.css'
})
export class RegisterpaiemenByIDComponent implements OnInit {
  updatePaymentForm!: FormGroup;
  formResult: string = "";
id:number;
patient:Payment=new Payment();
services = [
  { nom: 'Séance de kinésithérapie individuelle', type: 'Traitement des douleurs lombaires', montant: 45 },
  { nom: 'Séance de kinésithérapie en groupe', type: 'Renforcement musculaire après une blessure', montant: 30 },
  { nom: 'Séance de drainage lymphatique manuel', type: 'Réduction des œdèmes', montant: 60 },
  { nom: 'Séance de rééducation périnéale', type: 'Renforcement du périnée', montant: 55 }
];
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
        date: ['', Validators.required],
      service: ['', Validators.required],
      montant: ['', Validators.required],


    });
  }
  onServiceChange(event: any) {
    const selectedMontant = event.target.value;
    this.updatePaymentForm.patchValue({ montant: selectedMontant });
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

    this.service.registerpayByid(this.id,formValues,httpOptions).subscribe({
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
