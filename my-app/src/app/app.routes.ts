import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { _AuthComponent  } from './auth.auhtService';
import { LoginComponent } from './components/login/login.component';
import { PatientsComponent } from './patients/patients.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ResourcesComponent } from './resources/resources.component';
import { PaymentsComponent } from './payments/payments.component';
import { FicheMedicalComponent } from './fiche-medical/fiche-medical.component';
import { PrestationComponent } from './prestation/prestation.component';
import {RegisterPatientsComponent}from './patients/register-patients/register-patients.component';
import { UpdatePatientsComponent } from './patients/update-patients/update-patients.component';


export const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  {path:"dashbord", component: _AuthComponent  },
  {path:"patient", component:  PatientsComponent    },
  {path:"rendez_vous", component:  AppointmentsComponent    },
  {path:"salles", component:  ResourcesComponent    },
  {path :"payment", component : PaymentsComponent},
  {path :"fiche", component : FicheMedicalComponent},
  {path :"prestation", component : PrestationComponent},
  {path:"updatePatient/:id", component: UpdatePatientsComponent},
  {path:"patient-form", component: RegisterPatientsComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
