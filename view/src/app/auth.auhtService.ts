import { HttpClient } from "@angular/common/http";
import { Component, Injectable, NgModule, OnInit } from "@angular/core";
import { JwtServiceService } from "./jwt.service.service"
import { CommonModule } from "@angular/common";
@Component({
  selector: 'app-home',
  imports:[CommonModule],
  standalone:true,
  templateUrl: './auth.component.html'

})
@Injectable({
  providedIn:'root'
})
export class _AuthComponent {
  homeData:any;

constructor(private Http:HttpClient,
  private service: JwtServiceService,
){

}

}

