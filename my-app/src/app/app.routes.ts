// routes.ts
import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PatientsComponent } from './patients/patients.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ResourcesComponent } from './resources/resources.component';
import { PaymentsComponent } from './payments/payments.component';
import { FicheMedicalComponent } from './fiche-medical/fiche-medical.component';
import { PrestationComponent } from './prestation/prestation.component';
import { RegisterPatientsComponent } from './patients/register-patients/register-patients.component';
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
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { PrivateLayoutComponent } from './private-layout/private-layout.component';
import { RegisterFicheMedicalbyIdComponent } from './fiche-medical/register-fiche-medicalby-id/register-fiche-medicalby-id.component';
import { FicheMedicalbyIdComponent } from './fiche-medical/fiche-medicalby-id/fiche-medicalby-id.component';
import { UpdateFicheMedicalbyIdComponent } from './fiche-medical/update-fiche-medicalby-id/update-fiche-medicalby-id.component';
import { RegisterRendezvousIdComponent } from './appointments/register-rendezvous-id/register-rendezvous-id.component';
import { RendezvousIdComponent } from './appointments/rendezvous-id/rendezvous-id.component';
import { UpdateRendezvousIdComponent } from './appointments/update-rendezvous-id/update-rendezvous-id.component';
import { ViewpaiemenByIDComponent } from './payments/viewpaiemen-by-id/viewpaiemen-by-id.component';
import { RegisterpaiemenByIDComponent } from './payments/registerpaiemen-by-id/registerpaiemen-by-id.component';
import { ProfilrComponentComponent } from './user/profilr-component/profilr-component.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: PublicLayoutComponent, // Layout public pour les pages publiques
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  {
    path: '',
    component: PrivateLayoutComponent, // Layout privé pour les pages protégées
    canActivate: [authGuard], // Appliquer le garde d'authentification
    children: [
      { path: 'dashbord', component: HeaderComponent   },
      { path: 'patient', component: PatientsComponent },
      {path:'notifications',component:notificationsComponent },
      {path :'profile/:id',component:ProfilrComponentComponent},
      { path: 'rendez_vous', component: AppointmentsComponent   },
      {path:'register_rendezvousbyID/:id',component:RendezvousIdComponent },
      {path:'update_RendezBY_ID/:id',component:UpdateRendezvousIdComponent },
      {path:'viewRendez_vous/:id',component:RegisterRendezvousIdComponent },
      { path: 'salles', component: ResourcesComponent  },
      {path : 'viewpaiement/:id', component:ViewpaiemenByIDComponent  },
      { path: 'payment', component: PaymentsComponent  },
      { path: 'fiche', component: FicheMedicalComponent  },
      {path:'viewficheMedical/:id',component:RegisterFicheMedicalbyIdComponent },
      {path:'update_fichemedicalBY_ID/:id', component:UpdateFicheMedicalbyIdComponent},
      { path: 'prestation', component: PrestationComponent },
      { path: 'updatePatient/:id', component: UpdatePatientsComponent },
      {path:'register_payementbyID/:id',component:RegisterpaiemenByIDComponent },
      { path: 'patient-form', component: RegisterPatientsComponent },
      { path: 'register-payement', component: RegisterPaymentComponent },
      { path: 'updatePayment/:id', component: UpdatePaymentComponent },
      { path: 'register_prestation', component: RegisterPrestationComponent },
      { path: 'update_prestation/:id', component: UpdatePrestationComponent },
      { path: 'register_Ressource', component: RegisterRessourcesComponent },
      { path: 'update-Ressource/:id', component: UpdateRessourcesComponent },
      { path: 'register_fichemedical', component: RegisterFicheMedicalComponent },
      {path:'register_fichemedicalbyID/:id',component:FicheMedicalbyIdComponent },
      { path: 'update_fichemedical/:id', component: UpdateFicheMedicalComponent },
      { path: 'register_apponit', component: RegisterAppointComponent },
      { path: 'update_apponit/:id', component: UpdateAppointComponent },
      { path: 'forbidden', component: ForbiddenComponent },
    ],
  },
  { path: '**', redirectTo: '/login' }, // Redirection pour les routes inconnues
];
