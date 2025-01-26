import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceCompletService } from '../../service-complet.service';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from '../../shared/models';

@Component({
  selector: 'app-update-payment',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-payment.component.html',
  styleUrl: './update-payment.component.css'
})
export class UpdatePaymentComponent implements OnInit {
  updatePaymentForm!: FormGroup;
  formResult: string = "";
id:number;
patient:Payment=new Payment();
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
      montant: ['', [Validators.required, Validators.min(0)]],
      patient_id: [, Validators.required],


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

    this.service.updatePayment(this.id,formValues ).subscribe({
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
