import { Component, OnInit } from '@angular/core';
import { fiche_medical } from '../../shared/models';
import { ServiceCompletService } from '../../service-complet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-fiche-medicalby-id',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register-fiche-medicalby-id.component.html',
  styleUrl: './register-fiche-medicalby-id.component.css'
})
export class RegisterFicheMedicalbyIdComponent implements OnInit {
  fiche_medical: fiche_medical[] | undefined;
    EnteredID!:number;
    id: number;
    userRole: string | null | undefined;

    constructor(private employeeService: ServiceCompletService,  private route: Router,
      private router: ActivatedRoute,
    ) {
  this.fiche_medical = [];
this.id=0;
     }

     ngOnInit(): void {
      this.userRole = localStorage.getItem('roles');
      this.router.params.subscribe(params => {
        this.id = +params['id']; // Convertit en number

        console.log("ID récupéré via subscribe:", this.id);
        this.getfiche_medical();
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

    getfiche_medical(){
      this.employeeService.getficheById_patients(this.id).subscribe(data => {this.fiche_medical = data;});
  console.log(this.employeeService.getficheById_patients(1));

    }
    registerficheMedical(id:number) {
      this.route.navigate(['/register_fichemedicalbyID', id]);
    }
    updatefichemedical(id: number){
      this.route.navigate(['/update_fichemedicalBY_ID', id]);
    }
    deletefiche(id: number){

      if(confirm("Are you sure to delete patient ID: "+id)){
      this.employeeService.delete_fichemedical(id).subscribe( data => {
        alert("Le patient a été supprimé avec succès.");
        this.route.navigate(['/login']).then(success => {
          if (!success) {
            console.error("Navigation vers /login a échoué.");
          }
        });

      })}
    }

}

