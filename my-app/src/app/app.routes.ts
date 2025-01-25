import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { _AuthComponent  } from './auth.auhtService';
import { LoginComponent } from './components/login/login.component';
import { PatientsComponent } from './patients/patients.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ResourcesComponent } from './resources/resources.component';
import { PaymentsComponent } from './payments/payments.component';




export const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  {path:"dashbord", component: _AuthComponent  },
  {path:"patient", component:  PatientsComponent    },
  {path:"rendez_vous", component:  AppointmentsComponent    },
  {path:"salles", component:  ResourcesComponent    },
  {path :"payment", component : PaymentsComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
