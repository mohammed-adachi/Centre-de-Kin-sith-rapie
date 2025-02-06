import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { _AuthComponent } from './auth.auhtService';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './header/header.component';
import { authGuard } from './auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';


const routes: Routes = [
  { path: "register", component: RegisterComponent },
  {path: 'login', component: LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes),[CommonModule]],
  exports: [RouterModule]
})


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
