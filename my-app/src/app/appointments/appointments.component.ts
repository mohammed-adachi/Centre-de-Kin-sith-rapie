import { Component, OnInit } from '@angular/core';
import { Appointment } from '../shared/models';
import { ServiceCompletService } from '../service-complet.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})
export class AppointmentsComponent implements OnInit {
   rendez_vous: Appointment[] | undefined;
    EnteredID!:number;

    constructor(private employeeService: ServiceCompletService,  private router: Router) {
  this.rendez_vous = [];
     }

     ngOnInit(): void {
      this.getrendez_vous();
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

    getrendez_vous(){
      this.employeeService.rendez_vous().subscribe(data => {this.rendez_vous = data;});
  console.log(this.employeeService.rendez_vous());

    }
    register_apponit() {
      this.router.navigate(['/register_apponit']);
    }
    update_apponit(id: number){
      this.router.navigate(['/update_apponit', id]);
    }
    delete_apponit(id: number){
      if(confirm("Are you sure to delete patient ID: "+id)){
      this.employeeService.delete_appoint(id).subscribe( data => {
        alert("Le patient a été supprimé avec succès.");
        this.router.navigate(['/login']).then(success => {
          if (!success) {
            console.error("Navigation vers /login a échoué.");
          }
        });

      })}
    }

}
