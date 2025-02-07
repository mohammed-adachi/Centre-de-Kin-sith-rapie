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



@NgModule({

  declarations: [
    AppComponent,
    RegisterComponent,
    _AuthComponent,
    LoginComponent,
    MatFormFieldModule,
    MatInputModule,
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
