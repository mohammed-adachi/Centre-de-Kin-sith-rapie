import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto';
import { JwtService } from '../service/jwt.service';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { ChartConfiguration } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  // Données pour les statistiques
  statistics = {
    patientsCount: 120,
    appointmentsCount: 45,
    paymentCount: 89
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

  // Données pour le graphique à barres (nombre de lits par salle)
  bedsPerRoomChartData: { datasets: ChartDataset[], labels: string[] } = {
    datasets: [
      {
        label: 'Nombre de lits',
        data: [10, 15, 8, 12, 20],
        backgroundColor: 'rgba(239, 68, 68, 0.6)', // Couleur rouge
        borderColor: 'rgba(239, 68, 68, 1)',
        borderWidth: 1
      }
    ],
    labels: ['Salle 1', 'Salle 2', 'Salle 3', 'Salle 4', 'Salle 5']
  };

  // Données pour le graphique à barres (nombre de salles)
  roomsChartData: { datasets: ChartDataset[], labels: string[] } = {
    datasets: [
      {
        label: 'Nombre de salles',
        data: [5, 10, 7, 8, 12],
        backgroundColor: 'rgba(16, 185, 129, 0.6)', // Couleur verte
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 1
      }
    ],
    labels: ['Étage 1', 'Étage 2', 'Étage 3', 'Étage 4', 'Étage 5']
  };

  // Données pour le graphique à barres (prestations)
  servicesChartData: { datasets: ChartDataset[], labels: string[] } = {
    datasets: [
      {
        label: 'Prestations',
        data: [50, 75, 60, 90, 80],
        backgroundColor: 'rgba(245, 158, 11, 0.6)', // Couleur orange
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
        backgroundColor: 'rgba(59, 130, 246, 0.6)', // Couleur bleue
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
        data: [4, 5, 3, 6, 2], // Nombre de lits par salle (exemple : 4 lits en Salle 1, 5 en Salle 2, etc.)
        backgroundColor: [
          'rgba(99, 102, 241, 0.6)', // Indigo
          'rgba(239, 68, 68, 0.6)',  // Rouge
          'rgba(16, 185, 129, 0.6)', // Vert
          'rgba(245, 158, 11, 0.6)', // Orange
          'rgba(59, 130, 246, 0.6)'  // Bleu
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
    labels: ['Salle 1', 'Salle 2', 'Salle 3', 'Salle 4', 'Salle 5'] // Noms des salles
  };

  // Options pour le diagramme circulaire
  pieChartOption: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Position de la légende
      },
      tooltip: {
        enabled: true // Activer les infobulles
      }
    }
  };

  constructor() {}



  ngOnInit(): void {}
}

