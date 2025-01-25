import { Component, OnInit } from '@angular/core';
import { Salle } from '../shared/models';
import { ServiceCompletService } from '../service-complet.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent implements OnInit {
  salle: Salle[] | undefined;
  EnteredID!:number;

      constructor(private employeeService: ServiceCompletService,  private router: Router) {
    this.salle = [];
       }

       ngOnInit(): void {
        this.getsalles();
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

      getsalles(){
        this.employeeService.salles().subscribe(data => {this.salle = data;});
    console.log(this.employeeService.rendez_vous());

      }


}
