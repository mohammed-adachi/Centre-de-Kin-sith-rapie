import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceCompletService } from '../../service-complet.service';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../../shared/models';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register-rendezvous-id',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register-rendezvous-id.component.html',
  styleUrl: './register-rendezvous-id.component.css'
})
export class RegisterRendezvousIdComponent implements OnInit {
   rendez_vous: Appointment[] | undefined;
    EnteredID!:number;
    id: number;
    userRole: string | null | undefined;

    constructor(private employeeService: ServiceCompletService,  private route: Router,
      private router: ActivatedRoute,
    ) {
  this.rendez_vous = [];
this.id=0;
     }

     ngOnInit(): void {
      this.userRole = localStorage.getItem('roles');
      this.router.params.subscribe(params => {
        this.id = +params['id']; // Convertit en number

        console.log("ID récupéré via subscribe:", this.id);
        this.getfiche_rendevous();
        this.userRole = localStorage.getItem('roles');
      });

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

    getfiche_rendevous(){
      this.employeeService.getrendezById_patients(this.id).subscribe(data => {this.rendez_vous = data;});
  console.log(this.employeeService.getficheById_patients(1));

    }
    addAppointment(id:number) {
      this.route.navigate(['/register_rendezvousbyID', id]);
    }
    editAppointment(id: number){
      this.route.navigate(['/update_RendezBY_ID', id]);
    }
    deleteAppointment(id: number){

      if(confirm("Are you sure to delete patient ID: "+id)){
      this.employeeService.delete_appoint(id).subscribe( data => {
        alert("Le patient a été supprimé avec succès.");
        this.route.navigate(['/login']).then(success => {
          if (!success) {
            console.error("Navigation vers /login a échoué.");
          }
        });

      })}
    }

}

