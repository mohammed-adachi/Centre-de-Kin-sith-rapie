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
import { RegisterPaymentComponent } from './payments/register-payment/register-payment.component';
import { UpdatePaymentComponent } from './payments/update-payment/update-payment.component';
import { RegisterPrestationComponent } from './prestation/register-prestation/register-prestation.component';
import { UpdatePrestationComponent } from './prestation/update-prestation/update-prestation.component';
import { RegisterRessourcesComponent } from './resources/register-ressources/register-ressources.component';
import { UpdateRessourcesComponent } from './resources/update-ressources/update-ressources.component';
import { UpdateFicheMedicalComponent } from './fiche-medical/update-fiche-medical/update-fiche-medical.component';
import { RegisterFicheMedicalComponent } from './fiche-medical/register-fiche-medical/register-fiche-medical.component';
import { RegisterAppointComponent } from './appointments/register-appoint/register-appoint.component';
import { UpdateAppointComponent } from './appointments/update-appoint/update-appoint.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HeaderComponent } from './header/header.component';
import { authGuard } from './auth.guard';


export const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent  , pathMatch: 'full'},
  {path:"dashbord", component: HeaderComponent ,canActivate: [authGuard] },
  {path:"patient", component:  PatientsComponent ,canActivate: [authGuard]   },
  {path:"rendez_vous", component:  AppointmentsComponent ,   canActivate:[authGuard]    },
  {path:"salles", component:  ResourcesComponent  ,canActivate: [authGuard]  },
  {path :"payment", component : PaymentsComponent ,canActivate: [authGuard] },
  {path :"fiche", component : FicheMedicalComponent ,canActivate: [authGuard]  },
  {path :"prestation", component : PrestationComponent ,canActivate: [authGuard]},
  {path:"updatePatient/:id", component: UpdatePatientsComponent ,canActivate: [authGuard]},
  {path:"patient-form", component: RegisterPatientsComponent ,canActivate: [authGuard]},
  {path:"register-payement", component: RegisterPaymentComponent ,canActivate: [authGuard]},
  { path: "updatePayment/:id", component: UpdatePaymentComponent ,canActivate: [authGuard]},
  {path:"register_prestation", component: RegisterPrestationComponent ,canActivate: [authGuard]},
  {path:"update_prestation/:id", component: UpdatePrestationComponent ,canActivate: [authGuard]},
  {path: 'register_Ressource', component: RegisterRessourcesComponent ,canActivate: [authGuard]},
  {path: 'update-Ressource/:id', component: UpdateRessourcesComponent ,canActivate: [authGuard]},
  {path: 'register_fichemedical', component: RegisterFicheMedicalComponent ,canActivate: [authGuard]},
  {path: 'update_fichemedical/:id', component: UpdateFicheMedicalComponent ,canActivate: [authGuard]},
  {path: 'register_apponit', component: RegisterAppointComponent ,canActivate: [authGuard]},
  {path: 'update_apponit/:id', component: UpdateAppointComponent ,canActivate: [authGuard]},
  { path: 'forbidden', component: ForbiddenComponent }
];
