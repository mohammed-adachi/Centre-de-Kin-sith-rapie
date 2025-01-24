import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Patient } from '../patient';

@Injectable({
  providedIn: 'root'
})
export class ServicePatientService {
  httpClient: any;

  private baseURL = "localhost:8082/acount";

  constructor( private http: HttpClient) { }

  getPatientList(): Observable<Patient[]>{
    return this.http.get<Patient[]>('http://localhost:8082/acount/patient');
  }

}
