import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtServiceService {

  constructor( private http: HttpClient) { }

  login(signRequest: any,httpOptions:any): Observable<any> {
    console.log(signRequest)
    return this.http.post("http://localhost:8082/acount/login", signRequest,httpOptions);
  }

}
