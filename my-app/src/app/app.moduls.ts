import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatError } from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtService } from './service/jwt.service';
import { RegisterComponent } from './components/register/register.component';
import { AuthInterceptor } from './auth.interceptor';
import { _AuthComponent  } from './auth.auhtService';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth.guard';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { PrivateLayoutComponent } from './private-layout/private-layout.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BaseChartDirective  } from 'ng2-charts';
import { NgChartsModule } from 'ng2-charts';


// Importer le module

import { FullCalendarModule } from '@fullcalendar/angular';



@NgModule({

  declarations: [
    AppComponent,
    RegisterComponent,
    _AuthComponent,
    LoginComponent,
    FullCalendarModule,
    MatFormFieldModule,
    BaseChartDirective ,// Import du module
    MatInputModule,
    NgChartsModule,
    MatError,
    PublicLayoutComponent,
    PrivateLayoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    MatIconModule,
    RouterModule,
    FormsModule,

  ],
  providers: [
     authGuard,
    JwtService,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
