import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto';
import { JwtService } from '../service/jwt.service';
import { ChartDataset, ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { ServiceCompletService } from '../service-complet.service';
import { Salle } from '../shared/models';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']  // Fixed from `styleUrl` to `styleUrls`
})
export class HeaderComponent implements OnInit {
  salle: Salle[] = [];  // Initialize salle as an empty array
  bedsPerRoomChartData = {
    datasets: [] as ChartDataset[],  // Corrected type for datasets
    labels: [] as string[]  // Corrected type for labels
  };

  constructor(
    private employeeService: ServiceCompletService,
    private router: Router,
    private service: JwtService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getcount_patient();
    this.getrendeztotal();
    this.getpayement();
    this.getsalle();
  }

  getcount_patient() {
    this.employeeService.getPatients_count().subscribe(data => {
      this.statistics.patientsCount = data;
      this.cdRef.detectChanges();
    });
  }

  getrendeztotal() {
    this.employeeService.getRendezvous_count().subscribe(data => {
      this.statistics.appointmentsCount = data;
      this.cdRef.detectChanges();
    });
  }

  getpayement() {
    this.employeeService.getpayemntTotal().subscribe(data => {
      this.statistics.paymentCount = data;
      this.cdRef.detectChanges();
    });
  }

  getsalle() {
    this.employeeService.getsallelits().subscribe(data => {
      if (data) {
        const salles = Object.entries(data).map(([id, name]) => ({
          id: Number(id),
          name: <string><unknown>name,  // Cast name as string
          nombre_machines: 0,  // Default value
          nombre_lits: Number(id)      // Default value
        }));

        // Update the chart data
        this.bedsPerRoomChartData = {
          datasets: [
            {
              label: 'Nombre de lits',
              data: salles.map(salle => salle.nombre_lits),  // Map data to the number of beds
              backgroundColor: 'rgba(239, 68, 68, 0.6)',  // Red color
              borderColor: 'rgba(239, 68, 68, 1)',  // Dark red
              borderWidth: 1
            }
          ],
          labels: salles.map(salle => salle.name)  // Map labels to the salle names
        };
      }
    });
  }

  // Données pour les statistiques
  statistics = {
    patientsCount: 0,
    appointmentsCount: 0,
    paymentCount: 0
  };

  // Données pour le graphique à barres (patients)
  barChartData: { datasets: ChartDataset[], labels: string[] } = {
    datasets: [
      {
        label: 'Patients',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(99, 102, 241, 0.6)', // Couleur indigo
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 1
      }
    ],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
  };

  // Données pour le graphique circulaire (répartition)
  pieChartData: { datasets: ChartDataset[], labels: string[] } = {
    datasets: [
      {
        data: [300, 500, 200],
        backgroundColor: ['rgba(99, 102, 241, 0.6)', 'rgba(239, 68, 68, 0.6)', 'rgba(16, 185, 129, 0.6)'],
        borderColor: ['rgba(99, 102, 241, 1)', 'rgba(239, 68, 68, 1)', 'rgba(16, 185, 129, 1)'],
        borderWidth: 1
      }
    ],
    labels: ['Patients', 'Rendez-vous', 'Paiements']
  };

  // Données pour le graphique à barres (prestations)
  servicesChartData: { datasets: ChartDataset[], labels: string[] } = {
    datasets: [
      {
        label: 'Prestations',
        data: [50, 75, 60, 90, 80],
        backgroundColor: 'rgba(245, 158, 11, 0.6)',  // Couleur orange
        borderColor: 'rgba(245, 158, 11, 1)',
        borderWidth: 1
      }
    ],
    labels: ['Consultation', 'Chirurgie', 'Radiologie', 'Laboratoire', 'Urgence']
  };

  // Données pour le graphique à barres (clients ayant payé)
  paidClientsChartData: { datasets: ChartDataset[], labels: string[] } = {
    datasets: [
      {
        label: 'Clients ayant payé',
        data: [120, 150, 130, 140, 160],
        backgroundColor: 'rgba(59, 130, 246, 0.6)',  // Couleur bleue
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1
      }
    ],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
  };

  // Options pour les graphiques à barres
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  // Options pour le graphique circulaire
  pieChartOptions: ChartOptions = {
    responsive: true
  };

  // Données pour le diagramme circulaire (répartition des lits par salle)
  bedsPerRoomPieChartData: { datasets: ChartDataset[], labels: string[] } = {
    datasets: [
      {
        data: [4, 5, 3, 6, 2],  // Example data
        backgroundColor: [
          'rgba(99, 102, 241, 0.6)',  // Indigo
          'rgba(239, 68, 68, 0.6)',   // Rouge
          'rgba(16, 185, 129, 0.6)',  // Vert
          'rgba(245, 158, 11, 0.6)',  // Orange
          'rgba(59, 130, 246, 0.6)'   // Bleu
        ],
        borderColor: [
          'rgba(99, 102, 241, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(59, 130, 246, 1)'
        ],
        borderWidth: 1
      }
    ],
    labels: ['Salle 1', 'Salle 2', 'Salle 3', 'Salle 4', 'Salle 5']
  };

  // Options pour le diagramme circulaire
  pieChartOption: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'  // Position de la légende
      },
      tooltip: {
        enabled: true  // Activer les infobulles
      }
    }
  };
}
