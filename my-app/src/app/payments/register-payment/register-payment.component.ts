import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {  FormControl } from '@angular/forms';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceCompletService } from '../../service-complet.service';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-payment',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,MatIconModule, ],
  templateUrl: './register-payment.component.html',
  styleUrl: './register-payment.component.css'
})
export class RegisterPaymentComponent implements OnInit {
  registerForm!: FormGroup;
  formResult: string = "";

  constructor(
    private service: ServiceCompletService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Mise à jour des champs pour les coordonnées de paiement
    this.registerForm = this.fb.group({
      date: [null, Validators.required],
      montant: [null, [Validators.required, Validators.min(0)]],
      patient_id: [null, Validators.required],
    });
  }

  submitForm() {
    console.log("Soumission du formulaire de paiement");
    console.log(this.registerForm);
    const formValues = this.registerForm.value;
    console.log(formValues);

    // Options HTTP avec en-tête Content-Type
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    // Appel au service pour enregistrer les coordonnées de paiement
    this.service.register_payments(formValues, httpOptions).subscribe({
      next: (response) => {
        console.log(response); // Vérifie la réponse
        if (response.id != null) {
          alert(
            "Paiement enregistré avec succès ! Détails : Montant - " +
              response.montant +
              ", Date - " +
              response.date
          );
        }
      },
      error: (error) => {
        console.error("Erreur lors de l'enregistrement :", error);
      },
      complete: () => {
        console.log("Souscription terminée.");
      },
    });
  }

  goToPayments(): void {
    this.router.navigateByUrl('/payments').then(success => {
      if (success) {
        console.log('Redirection vers /payments réussie');
      } else {
        console.error('Échec de la redirection vers /payments');
      }
    });
  }

}
