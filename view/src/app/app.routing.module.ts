import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { ComponentComponent } from './auth/component/component.component';

const routes: Routes = [
  { path :"login", component : ComponentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
