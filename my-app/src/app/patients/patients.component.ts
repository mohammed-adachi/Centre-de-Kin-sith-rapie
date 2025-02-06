import { Component, OnInit } from '@angular/core';
import { Patient } from '../shared/models';
import { ServiceCompletService } from '../service-complet.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JwtService } from '../service/jwt.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [CommonModule,FormsModule  ],
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: Patient[] = [];
  filteredPatients: Patient[] = [];
  searchTerm: string = '';  // Initialisation du terme de recherche
  userRole: string | null = null;

  constructor(
    private employeeService: ServiceCompletService,
    private router: Router,
    private service: JwtService
  ) {}

  ngOnInit(): void {
    this.getPatient();
    this.userRole = localStorage.getItem('roles');
  }

  getPatient() {
    this.employeeService.getPatients().subscribe(data => {
      this.patients = data;
      this.filteredPatients = data; // Initialisation des patients filtrés avec tous les patients
    });
  }

  filterPatients() {
    if (!this.searchTerm) {
      this.filteredPatients = this.patients; // Si le terme de recherche est vide, afficher tous les patients
    } else {
      this.filteredPatients = this.patients.filter(patient =>
        patient.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        patient.adress.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        patient.telephone.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  deletePatient(id: number) {
    if (confirm("Are you sure to delete patient ID: " + id)) {
      this.employeeService.deletePatient(id).subscribe(data => {
        alert("Le patient a été supprimé avec succès.");
        this.getPatient();
        this.router.navigate(['/login']).then(success => {
          if (!success) {
            console.error("Navigation vers /login a échoué.");
          }
        });
      });
    }
  }

  registerPatient() {
    this.router.navigate(['/patient-form']);
  }

  updatePatient(id: number) {
    this.router.navigate(['updatePatient', id]);
  }

  viewficheMedical(id: number) {
    this.router.navigate(['viewficheMedical', id]);
  }

  // La méthode de filtrage est désormais déclenchée à chaque changement de recherche
  onSearchTermChange() {
    this.filterPatients();
  }
  viewRnedez_vous(id: number) {
    this.router.navigate(['viewRendez_vous', id]);
  }

}
