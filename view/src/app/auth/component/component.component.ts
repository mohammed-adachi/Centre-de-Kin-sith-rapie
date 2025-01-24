import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  { Router } from "@angular/router"
import { JwtServiceService } from '../../jwt.service.service';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-component',
  standalone: true,
  imports: [],
  templateUrl: './component.component.html',
  styleUrl: './component.component.css'
})
export class ComponentComponent implements OnInit {
  loginForm!: FormGroup

  constructor(
    private service: JwtServiceService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required, Validators.name],
    password: ['', Validators.required],
    })
  }

  submitForm() {
    if (this.loginForm.valid) {
      const formValues = this.loginForm.value; // L'objet JavaScript

      // Options HTTP avec en-tête Content-Type
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
    this.service.login(
      formValues, httpOptions
    ).subscribe(
      (response) => {
        if (response.username!= null) {
          alert("Hello " + response.username);
        }
      }
    )
  }



  }
}
