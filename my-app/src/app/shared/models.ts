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
  patient !: Patient;
  date!: string;
  time!: string;
  location!: string;;
constructor() {
  this.id = 0;
  this.patient = new Patient();
   this.date = "";
   this.time = "";
   this.location = "";
}
}

// resource.model.ts
export class Salle {
  id!: number;
  name!: string;
  nombre_machines!: number;
 // Pour les salles
  nombre_lits!: number;     // Pour les salles         // Pour les forfaits
constructor() {
  this.id = 0;
  this.nombre_machines = 0;
this.name = "";
   this.nombre_lits = 0;

}}
export class user{
  id!:number;
  username!:string;
  firstname!:string;
  password!:string;
  email!:string;
  role!:string;
  constructor(){
    this.id=0;
    this.username="";
    this.firstname="";
    this.email="";
    this.role="";
  }
}


// payment.model.ts
export class Payment {
  id!: number;
  patient !: Patient;
  montant!: number;
  date!: Date;
  constructor() {
    this.id = 0;
    this.patient = new Patient();
    this.montant = 0;
    this.date = new Date();
}}
export class fiche_medical{
id!:number;
patient!:Patient;
description!:string;
constructor(){
  this.id=0;
  this.patient=new Patient();
  this.description="";}

}
export class prestation{
 id!:number;
  name!:string;
  tarif!:number;
  type!:string;
  constructor(){
    this.id=0;
    this.name="";
    this.tarif=0;
    this.type="";
  }


}
