import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientManagementComponent } from './patient-management/patient-management.component';
import { AppointmentManagementComponent } from './appointment-management/appointment-management.component';
import { ResourceManagementComponent } from './resource-management/resource-management.component';
import { PaymentManagementComponent } from './payment-management/payment-management.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MedicalRecordManagementComponent } from './medical-record-management/medical-record-management.component';
import { ServiceManagementComponent } from './service-management/service-management.component';
import { RouterModule } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http'; // New HttpClient API
import { UserComponent } from './user/user.component';
import { CommonModule, NgIf } from '@angular/common';
import { AuthInterceptor } from './auth.interceptor';
import { ServicePatientService } from './services/service-patient.service';

@NgModule({
  declarations: [
    AppComponent,
    PatientManagementComponent,
    AppointmentManagementComponent,
    ResourceManagementComponent,
    UserComponent,
    PaymentManagementComponent,
    HomeComponent,
    LoginComponent,
    MedicalRecordManagementComponent,
    ServiceManagementComponent,
    InscriptionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgIf,
    NgbModule

  ],
  providers: [
    ServicePatientService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } ,[provideHttpClient(withFetch())]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
