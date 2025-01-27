import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient,Appointment, Salle, Payment, fiche_medical, prestation } from './shared/models';

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
  rendez_vous(): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.baseURL}/rendezvous`);
  }
  salles(): Observable<Salle[]>{
    return this.http.get<Salle[]>(`${this.baseURL}/salles`);
  }
  paiment(): Observable<Payment[]>{
    return this.http.get<Payment[]>(`${this.baseURL}/paiements`);
  }
  getFiche(): Observable<fiche_medical[]>{
    return this.http.get<fiche_medical[]>(`${this.baseURL}/ficher_medical`);
  }
  prestations(): Observable<prestation[]>{
    return this.http.get<prestation[]>(`${this.baseURL}/prestations`);
  }
  // getEmployeeById(id: number): Observable<Patient>{
  //   return this.http.get<Patient>(`${this.baseURL}/get/${id}`);
  // }
  // register(signRequest: any,httpOptions:any): Observable<any> {

  //   console.log(signRequest)
  //   return this.http.post("http://localhost:8082/acount", signRequest,httpOptions);
  // }
  // register_patients(signRequest: any): Observable<any> {
  //   console.log(signRequest)
  //   return this.http.post("http://localhost:8082/acount/register_patient", signRequest);
  // }
  register_patients(signRequest: any,httpOptions:any): Observable<any> {

      console.log(signRequest)
      return this.http.post(`${this.baseURL}/register_patient`, signRequest,httpOptions);
    }
    updatePatients(id: number, signRequest: any,httpOptions:any): Observable<any>{
    console.log(signRequest);
    return this.http.put(`${this.baseURLS}/update_patient/${id}`,signRequest,httpOptions);
  }
  updatePatient(id: number, signRequest: any): Observable<any>{
    console.log(signRequest);

    // Convertir en JSON (facultatif) mais s'assurer que le Content-Type est correct
    const data = JSON.stringify(signRequest);
    console.log(data);

    const httpOptions = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return this.http.put(`${this.baseURL}/update_patient/${id}`,data,httpOptions);
  }

  deletePatient(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/delete_patient/${id}`);
  }


  register_payments(signRequest: any,httpOptions:any): Observable<any> {

    console.log(signRequest)
    return this.http.post(`${this.baseURL}/register_paiement`, signRequest,httpOptions);
  }
  updatePayment(id: number, signRequest: any): Observable<any>{
    console.log(signRequest);
    return this.http.put(`${this.baseURLS}/update_paiement/${id}`,signRequest);
  }

  deletePayment(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/delete_paiement/${id}`);
  }
  register_prestation(signRequest: any,httpOptions:any): Observable<any> {

    console.log(signRequest)
    return this.http.post(`${this.baseURL}/register_presation`, signRequest,httpOptions);
  }
  updatePrestation(id: number, signRequest: any): Observable<any>{
    console.log(signRequest);
    return this.http.put(`${this.baseURLS}/update_prestation/${id}`,signRequest);
  }
  deletePrestation(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/delete_presation/${id}`);
  }
  register_ressource(signRequest: any,httpOptions:any): Observable<any> {
    console.log(signRequest)
    return this.http.post(`${this.baseURL}/register_salle`, signRequest,httpOptions);
  }
  updateResource (id: number, signRequest: any): Observable<any>{
    console.log(signRequest);
    return this.http.put(`${this.baseURLS}/update_salle/${id}`,signRequest);
  }
  deleteRessource(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/delete_salle/${id}`);
  }

}
