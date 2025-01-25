// patient.model.ts
export class Patient {
  id!: number;
  name!: string;
  adress!: string;
  telephone!: string;;

  constructor() {
    this.id = 0;
    this.name = "";
     this.telephone = "";
     this.adress = "";
}}

// appointment.model.ts
export class Appointment {
  id!: number;
  patientId!: number;
  date!: Date;
  heure!: string;
  statut!: string;;
constructor() {
  this.id = 0;
  this.patientId = 0;
   this.date = new Date();
   this.heure = "";
   this.statut = "";
}
}

// resource.model.ts
export interface Resource {
  id: number;
  type: 'salle' | 'machine' | 'forfait';
  nom: string;
  description: string;
  nombreMachines?: number; // Pour les salles
  nombreLits?: number;     // Pour les salles
  tarif?: number;          // Pour les forfaits
}

// payment.model.ts
export interface Payment {
  id: number;
  patientId: number;
  montant: number;
  date: Date;
}
