import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './shared/models';

@Injectable({
  providedIn: 'root'
})
export class ServiceCompletService {
  httpClient: any;

  private baseURL = "http://localhost:8082/acount";
  private baseURLS = "http://localhost:8082/acount";

  constructor(private http: HttpClient) {
  }

  getPatients(): Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.baseURL}/patient`);
  }
  // getEmployeeById(id: number): Observable<Patient>{
  //   return this.http.get<Patient>(`${this.baseURL}/get/${id}`);
  // }
  // register(signRequest: any,httpOptions:any): Observable<any> {

  //   console.log(signRequest)
  //   return this.http.post("http://localhost:8082/acount", signRequest,httpOptions);
  // }
  registers(signRequest: any): Observable<any> {
    console.log(signRequest)
    return this.http.post("http://localhost:8082/acount/register_patient", signRequest);
  }
  updateEmployee(id: number, signRequest: any,httpOptions:any): Observable<any>{
    console.log(signRequest);
    return this.http.put(`${this.baseURLS}/update_patient/${id}`,signRequest,httpOptions);
  }
  updateEmploye(id: number, signRequest: any): Observable<any>{
    console.log(signRequest);

    // Convertir en JSON (facultatif) mais s'assurer que le Content-Type est correct
    const data = JSON.stringify(signRequest);
    console.log(data);

    const httpOptions = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return this.http.put(`${this.baseURL}/updatee/${id}`,data,httpOptions);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/delete_patient/${id}`);
  }
}
