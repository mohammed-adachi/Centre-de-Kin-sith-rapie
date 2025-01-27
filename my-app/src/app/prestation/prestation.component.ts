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


          getprestations(){
            this.employeeService.prestations().subscribe(data => {this.prestation = data;});
        console.log(this.employeeService.rendez_vous());

          }
          registerPrestation(){
            this.router.navigate(['register_prestation']);
          }
          updatePrestation(id: number){
            this.router.navigate(['update_prestation',id]);
          }
          deletePrestation(id: number){if(confirm("Are you sure to delete patient ID: "+id)){
            this.employeeService.deletePrestation(id).subscribe( data => {
              alert("Le patient a été supprimé avec succès.");
              this.getprestations();
              this.router.navigate(['/login']).then(success => {
                if (!success) {
                  console.error("Navigation vers /login a échoué.");
                }
              });

            })}

}}
