import { Component, OnInit } from '@angular/core';
import { fiche_medical, Payment } from '../../shared/models';
import { ServiceCompletService } from '../../service-complet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-viewpaiemen-by-id',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewpaiemen-by-id.component.html',
  styleUrl: './viewpaiemen-by-id.component.css'
})
export class ViewpaiemenByIDComponent implements OnInit {
  paiements: Payment[] | undefined;
    EnteredID!:number;
    id: number;
    userRole: string | null | undefined;

    constructor(private employeeService: ServiceCompletService,  private route: Router,
      private router: ActivatedRoute,
    ) {
  this.paiements = [];
this.id=0;
     }

     ngOnInit(): void {
      this.userRole = localStorage.getItem('roles');
      this.router.params.subscribe(params => {
        this.id = +params['id']; // Convertit en number

        console.log("ID récupéré via subscribe:", this.id);
        this.getpaye();
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

   getpaye(){
      this.employeeService.getpayementBuId(this.id).subscribe(data => {this.paiements = data;});
  console.log(this.employeeService.getficheById_patients(1));

    }
    registerPaiement(id:number) {
      this.route.navigate(['/register_payementbyID', id]);
    }
    updatePaiement(id: number){
      this.route.navigate(['/update_fichemedicalBY_ID', id]);
    }
    deletePaiement(id: number){

      if(confirm("Are you sure to delete patient ID: "+id)){
      this.employeeService.deletePayment(id).subscribe( data => {
        alert("Le patient a été supprimé avec succès.");
        this.route.navigate(['/login']).then(success => {
          if (!success) {
            console.error("Navigation vers /login a échoué.");
          }
        });

      })}
    }

}

