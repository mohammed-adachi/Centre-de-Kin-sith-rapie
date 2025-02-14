import { Component, OnInit } from '@angular/core';
import { ServiceCompletService } from '../../service-complet.service';
import { Appointment } from '../../shared/models';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-notifications-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications-component.component.html',
  styleUrl: './notifications-component.component.css'
})
export class NotificationsComponentComponent implements OnInit {
  rendezVousList: Appointment[] = [];

  constructor(private rendezVousService: ServiceCompletService) {}

  ngOnInit(): void {
    this.rendezVousService.getRendezVousToday().subscribe((data: any[]) => {
      console.log('Rendez-vous:', data);

      if (data && Array.isArray(data)) {
        // Transformation des données reçues en instances de Appointment
        this.rendezVousList = data.map((item, index) => {
          const rendezVous = new Appointment();  // Créer une nouvelle instance de Appointment

          // Assigner les valeurs de chaque champ
          rendezVous.id = index + 1;  // Générer un ID (ou utiliser un ID réel si tu l'as dans l'API)
          rendezVous.date = item[0]; // "2025-02-14"

          // Assurer que `patient` est un objet avec `id` et `name`
          rendezVous.patient.id = item[1]; // Patient ID
          rendezVous.patient.name = 'Nom du patient'; // Remplacer si tu as un champ réel pour le nom

          rendezVous.time = item[3]; // "11:03:00"
          rendezVous.location = item[4]; // "Kénitra, MAR"

          return rendezVous;
        });

        // Trier les rendez-vous par heure
        this.rendezVousList.sort((a, b) => {
          const timeA = new Date(a.date + 'T' + a.time);
          const timeB = new Date(b.date + 'T' + b.time);
          return timeA.getTime() - timeB.getTime(); // Tri par heure croissante
        });
      }

      this.showNotifications(); // Afficher les notifications après avoir reçu les données
    });
  }



  showNotifications(): void {
    const now = new Date();
    this.rendezVousList.forEach((rendezVous) => {
      const rendezVousTime = new Date(rendezVous.date + ' ' + rendezVous.time);

      // Afficher la notification si le rendez-vous est passé
      if (rendezVousTime < now) {
        alert(`Rendez-vous passé: Patient ${rendezVous.patient.id} à ${rendezVous.time} à ${rendezVous.location}`);
      }
    });
  }
  isRendezVousPassed(rendezVous: Appointment): boolean {
    const now = new Date();
    const rendezVousTime = new Date(rendezVous.date + 'T' + rendezVous.time); // Utilise le format 'T' pour combiner date et heure
    return rendezVousTime < now;
  }

}
