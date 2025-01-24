import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone : false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: string = '';
  password: string = '';

  onSubmit() {
    // Traitement des informations de connexion
    console.log('Login:', this.login);
    console.log('Mot de passe:', this.password);
    
    // Vous pouvez ajouter ici l'appel à un service pour authentifier l'utilisateur
  }
}
