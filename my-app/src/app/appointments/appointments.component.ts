// Dans appointments.component.ts
import { Component, OnInit } from '@angular/core';
import { Appointment } from '../shared/models';
import { ServiceCompletService } from '../service-complet.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})
export class AppointmentsComponent implements OnInit {
  rendez_vous: Appointment[] | undefined;
  EnteredID!: number;
  calendarEvents: any[] = [];

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    eventClick: this.handleEventClick.bind(this),
    select: this.handleDateSelect.bind(this),
    locale: frLocale,
    events: this.calendarEvents,
    height: 'auto'
  };

  constructor(private employeeService: ServiceCompletService, private router: Router) {
    this.rendez_vous = [];
  }

  ngOnInit(): void {
    this.getrendez_vous();
  }

  getrendez_vous() {
    this.employeeService.rendez_vous().subscribe(data => {
      this.rendez_vous = data;
      this.updateCalendarEvents();
    });
  }

  updateCalendarEvents() {
    if (!this.rendez_vous) return;

    this.calendarEvents = this.rendez_vous.map(rdv => {
      return {
        id: rdv.id.toString(),
        title: `${rdv.patient.name} - ${rdv.location}`,
        start: `${rdv.date}T${rdv.time}`,
        extendedProps: {
          patientName: rdv.patient.name,
          location: rdv.location
        }
      };
    });

    // Mettre à jour les événements du calendrier
    this.calendarOptions.events = this.calendarEvents;
  }

  handleEventClick(clickInfo: any) {
    if (confirm(`Voulez-vous modifier le rendez-vous de ${clickInfo.event.extendedProps.patientName}?`)) {
      const rdvId = parseInt(clickInfo.event.id);
      this.update_apponit(rdvId);
    }
  }

  handleDateSelect(selectInfo: any) {
    const date = selectInfo.startStr.split('T')[0];
    let time = '09:00';
    if (selectInfo.startStr.includes('T')) {
      time = selectInfo.startStr.split('T')[1].substring(0, 5);
    }

    // Stockez la date et l'heure dans une variable de session ou un service
    // pour les récupérer dans le formulaire d'ajout
    sessionStorage.setItem('selectedDate', date);
    sessionStorage.setItem('selectedTime', time);

    this.register_apponit();

    // Effacer la sélection
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();
  }

  register_apponit() {
    this.router.navigate(['/register_apponit']);
  }

  update_apponit(id: number) {
    this.router.navigate(['/update_apponit', id]);
  }

  delete_apponit(id: number) {
    if (confirm("Are you sure to delete appointment ID: " + id)) {
      this.employeeService.delete_appoint(id).subscribe(data => {
        alert("Le rendez-vous a été supprimé avec succès.");
        this.getrendez_vous(); // Recharger les données après suppression
      });
    }
  }
}
