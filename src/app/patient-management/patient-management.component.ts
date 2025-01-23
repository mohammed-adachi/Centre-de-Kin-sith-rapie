import { Component } from '@angular/core';
import { Patient } from '../patient';
import { ServicePatientService } from '../services/service-patient.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-patient-management',
  standalone : false,
  templateUrl: './patient-management.component.html',
  styleUrls: ['./patient-management.component.css']
})
export class PatientManagementComponent {

  Patient:Patient[] | undefined;
  EnteredID!:number;
  constructor(private ServicePatientService: ServicePatientService,  private router: Router) {
    this.Patient=[];

   }

  ngOnInit(): void {

     //this.employees = [
       //{
         //"id": 1, name: 'John', post: 'post', salaire: 50000, adress: 'IT', phone: 'Developer',
        // action: 'action'
       //},

     //];

    this.getEmployees();
  }


 // goToEmployee(){


   // console.log(this.EnteredID);
    //this.router.navigate(['details-of-employee',this.EnteredID]);
 // }

  getEmployees(){
    this.ServicePatientService.getPatientList().subscribe(data => {this.Patient = data;});
console.log(this.ServicePatientService.getPatientList());

  }

  // patients = [
  //   { id: 1, firstName: 'John', lastName: 'Doe', phone: '123456789' },
  //   { id: 2, firstName: 'Jane', lastName: 'Smith', phone: '987654321' },
  // ];

  // // Variables pour le formulaire
  // id: number | null = null;
  // firstName: string = '';
  // lastName: string = '';
  // phone: string = '';

  // // Variable pour la recherche
  // searchQuery: string = '';

  // // Ajouter ou Modifier un patient
  // savePatient() {
  //   if (this.id) {
  //     // Modification
  //     const patient = this.patients.find(p => p.id === this.id);
  //     if (patient) {
  //       patient.firstName = this.firstName;
  //       patient.lastName = this.lastName;
  //       patient.phone = this.phone;
  //     }
  //   } else {
  //     // Ajout
  //     const newPatient = {
  //       id: this.patients.length + 1,
  //       firstName: this.firstName,
  //       lastName: this.lastName,
  //       phone: this.phone,
  //     };
  //     this.patients.push(newPatient);
  //   }
  //   this.resetForm();
  // }

  // // Remplir le formulaire pour modification
  // editPatient(patient: any) {
  //   this.id = patient.id;
  //   this.firstName = patient.firstName;
  //   this.lastName = patient.lastName;
  //   this.phone = patient.phone;
  // }

  // // Supprimer un patient
  // deletePatient(id: number) {
  //   this.patients = this.patients.filter(patient => patient.id !== id);
  // }

  // // Réinitialiser le formulaire
  // resetForm() {
  //   this.id = null;
  //   this.firstName = '';
  //   this.lastName = '';
  //   this.phone = '';
  // }

  // // Rechercher des patients
  // get filteredPatients() {
  //   return this.patients.filter(patient =>
  //     `${patient.firstName} ${patient.lastName}`.toLowerCase().includes(this.searchQuery.toLowerCase())
  //   );
  // }
}
