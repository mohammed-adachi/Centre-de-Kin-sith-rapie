import { Component, OnInit } from '@angular/core';
import { fiche_medical } from '../shared/models';
import { ServiceCompletService } from '../service-complet.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fiche-medical',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fiche-medical.component.html',
  styleUrl: './fiche-medical.component.css'
})
export class FicheMedicalComponent implements OnInit {
  fiche_medical: fiche_medical[] | undefined;
    EnteredID!:number;

    constructor(private employeeService: ServiceCompletService,  private router: Router) {
  this.fiche_medical = [];
     }

     ngOnInit(): void {
      this.getfiche_medical()
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

    getfiche_medical(){
      this.employeeService.getFiche().subscribe(data => {this.fiche_medical = data;});
  console.log(this.employeeService.getPatients());

    }
    register_fichemedical() {
      this.router.navigate(['/register_fichemedical']);
    }
    update_fichemedical(id: number){
      this.router.navigate(['/update_fichemedical', id]);
    }
    delete_fichemedical(id: number){

      if(confirm("Are you sure to delete patient ID: "+id)){
      this.employeeService.delete_fichemedical(id).subscribe( data => {
        alert("Le patient a été supprimé avec succès.");
        this.router.navigate(['/login']).then(success => {
          if (!success) {
            console.error("Navigation vers /login a échoué.");
          }
        });

      })}
    }

}
