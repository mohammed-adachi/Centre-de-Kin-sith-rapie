import { Component, OnInit } from '@angular/core';
import { Patient } from '../shared/models';
import { ServiceCompletService } from '../service-complet.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.css'
})
export class PatientsComponent implements OnInit {
  patients: Patient[] | undefined;
  EnteredID!:number;

  constructor(private employeeService: ServiceCompletService,  private router: Router) {
this.patients = [];
   }

   ngOnInit(): void {
    this.getPatient();
    // this.getPatients(); // Chargez les patients au démarrage du composant
  }

     //this.employees = [
       //{
         //"id": 1, name: 'John', post: 'post', salaire: 50000, adress: 'IT', phone: 'Developer',
        // action: 'action'
       //},

     //];




 // goToEmployee(){


   // console.log(this.EnteredID);
    //this.router.navigate(['details-of-employee',this.EnteredID]);
 // }

  getPatient(){
    this.employeeService.getPatients().subscribe(data => {this.patients = data;});
console.log(this.employeeService.getPatients());

  }

  deletePatient(id: number){

    if(confirm("Are you sure to delete patient ID: "+id)){
    this.employeeService.deletePatient(id).subscribe( data => {
      alert("Le patient a été supprimé avec succès.");
      this.getPatient();
      this.router.navigate(['/login']).then(success => {
        if (!success) {
          console.error("Navigation vers /login a échoué.");
        }
      });

    })}
  }
  registerPatient() {
    this.router.navigate(['/patient-form']);
  }
  updatePatient(id: number){
    this.router.navigate(['updatePatient', id]);
  }


}
