import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-management',
  standalone : false,
  templateUrl: './appointment-management.component.html',
  styleUrls: ['./appointment-management.component.css']
})
export class AppointmentManagementComponent {
  // Sample list of appointments for demonstration
  appointments: any[] = [
    { id: 1, patientName: 'John Doe', date: '2025-01-15', time: '10:00 AM' },
    { id: 2, patientName: 'Jane Smith', date: '2025-01-16', time: '11:30 AM' }
  ];

  // Model to hold appointment data
  appointmentModel: any = {
    id: null,
    patientName: '',
    date: '',
    time: ''
  };

  // Property to track editing state
  isEditing: boolean = false;

  // Property to filter appointments
  searchTerm: string = '';

  // Method to add a new appointment
  addAppointment() {
    if (this.appointmentModel.patientName && this.appointmentModel.date && this.appointmentModel.time) {
      const newAppointment = { 
        id: this.appointments.length + 1, 
        ...this.appointmentModel 
      };
      this.appointments.push(newAppointment);
      this.resetForm();
    } else {
      alert('Please fill in all the fields.');
    }
  }

  // Method to update an existing appointment
  updateAppointment() {
    if (this.isEditing && this.appointmentModel.id) {
      const index = this.appointments.findIndex(appointment => appointment.id === this.appointmentModel.id);
      if (index !== -1) {
        this.appointments[index] = { ...this.appointmentModel };
        this.resetForm();
      } else {
        alert('Appointment not found.');
      }
    }
  }

  // Method to delete an appointment
  deleteAppointment(appointmentId: number) {
    this.appointments = this.appointments.filter(appointment => appointment.id !== appointmentId);
  }

  // Method to select an appointment for editing
  editAppointment(appointment: any) {
    this.appointmentModel = { ...appointment };
    this.isEditing = true;
  }

  // Method to reset the form after adding or editing
  resetForm() {
    this.appointmentModel = { id: null, patientName: '', date: '', time: '' };
    this.isEditing = false;
  }

  // Method to filter appointments based on the search term
  filterAppointments() {
    if (this.searchTerm) {
      return this.appointments.filter(appointment =>
        appointment.patientName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        appointment.date.includes(this.searchTerm) ||
        appointment.time.includes(this.searchTerm)
      );
    }
    return this.appointments;
  }
}
