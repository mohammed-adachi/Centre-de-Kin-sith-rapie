import { Component, OnInit } from '@angular/core';
import { Payment } from '../shared/models';
import { ServiceCompletService } from '../service-complet.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent implements OnInit {
  paiment: Payment[] | undefined;
    EnteredID!:number;
  
        constructor(private employeeService: ServiceCompletService,  private router: Router) {
      this.paiment = [];
         }
  
         ngOnInit(): void {
          this.getpaiment();
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
  
        getpaiment(){
          this.employeeService.paiment().subscribe(data => {this.paiment = data;});
      console.log(this.employeeService.rendez_vous());
  
        }

}
