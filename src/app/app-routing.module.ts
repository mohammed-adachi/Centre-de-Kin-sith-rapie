import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientManagementComponent } from './patient-management/patient-management.component';
import { AppointmentManagementComponent } from './appointment-management/appointment-management.component';
import { PaymentManagementComponent } from './payment-management/payment-management.component';
import { ResourceManagementComponent } from './resource-management/resource-management.component';
import { LoginComponent } from './login/login.component';
import { MedicalRecordManagementComponent } from './medical-record-management/medical-record-management.component';
import { ServiceManagementComponent } from './service-management/service-management.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'patient-management', component: PatientManagementComponent },
  { path: 'payment-management', component: PaymentManagementComponent },
  { path: 'resource-management', component: ResourceManagementComponent },
  { path: 'appointment-management', component: AppointmentManagementComponent},
  { path: 'login', component: LoginComponent },
  { path: 'app-user', component: UserComponent },
  { path: 'services', component: ServiceManagementComponent },
  { path: 'inscription', component: InscriptionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
