import { Component, OnInit } from '@angular/core';
import { prestation } from '../shared/models';
import { ServiceCompletService } from '../service-complet.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prestation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prestation.component.html',
  styleUrl: './prestation.component.css'
})
export class PrestationComponent implements OnInit {
   prestation: prestation[] | undefined;
      EnteredID!:number;
    
          constructor(private employeeService: ServiceCompletService,  private router: Router) {
        this.prestation = [];
           }
    
           ngOnInit(): void {
            this.getprestations();
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
    
          getprestations(){
            this.employeeService.prestations().subscribe(data => {this.prestation = data;});
        console.log(this.employeeService.rendez_vous());
    
          }

}
