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
  styleUrls: ['./fiche-medical.component.css']
})
export class FicheMedicalComponent implements OnInit {
  fiche_medical: fiche_medical[] | undefined;
  EnteredID!: number;
  userRole: string | null = null;

  constructor(private employeeService: ServiceCompletService, private router: Router) {
    this.fiche_medical = [];
  }

  ngOnInit(): void {
    this.getfiche_medical();
    this.userRole = localStorage.getItem('roles');
  }

  getfiche_medical() {
    this.employeeService.getFiche().subscribe(data => {
      this.fiche_medical = data;
    });
  }

  register_fichemedical() {
    this.router.navigate(['/register_fichemedical']);
  }

  update_fichemedical(id: number) {
    this.router.navigate(['/update_fichemedical', id]);
  }

  delete_fichemedical(id: number) {
    if (confirm("Are you sure to delete patient ID: " + id)) {
      this.employeeService.delete_fichemedical(id).subscribe(data => {
        alert("Le patient a été supprimé avec succès.");
        this.router.navigate(['/login']).then(success => {
          if (!success) {
            console.error("Navigation vers /login a échoué.");
          }
        });
      });
    }
  }

  // Méthode pour imprimer la fiche médicale
  printFicheMedical(id: number) {
    const fiche = this.fiche_medical?.find(f => f.id === id);
    if (fiche) {
      const printContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h1 style="text-align: center; font-size: 24px; margin-bottom: 20px;">Fiche Médicale</h1>
          <div style="margin-bottom: 15px;">
            <strong>Nom du Patient:</strong> ${fiche.patient.name}
          </div>
          <div style="margin-bottom: 15px;">
            <strong>Description:</strong> ${fiche.description}
          </div>
      

        </div>
      `;

      const printWindow = window.open('', '', 'width=600,height=600');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Fiche Médicale - ${fiche.patient.name}</title>
              <style>
                body { font-family: Arial, sans-serif; }
                h1 { text-align: center; }
                strong { font-weight: bold; }
              </style>
            </head>
            <body>
              ${printContent}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
      } else {
        alert("Impossible d'ouvrir la fenêtre d'impression. Veuillez désactiver les bloqueurs de pop-ups.");
      }
    } else {
      alert("Fiche médicale non trouvée.");
    }
  }
}
