import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class authGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (typeof window !== 'undefined') {
      console.log(localStorage.getItem('roles'));

      const token = localStorage.getItem('token');
      const userRole = localStorage.getItem('roles');
      const requestedPath = state.url;

      if (token) {
        if (userRole === 'DOCTOR') {

          const allowedRoutesForDoctor = ['/dashboard', '/fiche', '/patient','/forbidden','/register_fichemedicalbyID','/update_fichemedicalBY_ID/:id'];
          if (allowedRoutesForDoctor.some(route => requestedPath.startsWith(route))) {
            return true;
          }
          else {
            this.router.navigate(['/forbidden']);
            return false;
          }

          }

        else if (localStorage.getItem('roles') === 'SECRETARY') {
          const allowedRoutesForSecretary = ['/dashboard', '/patient', '/rendez_vous', '/salles', '/payment','/forbidden','/viewficheMedical/:id'];
          if (allowedRoutesForSecretary.some(route => requestedPath.startsWith(route))) {
            return true;
          }
          else {
            this.router.navigate(['/forbidden']);
            return false;
          }
        } }
      }

      // Rediriger vers /login si l'utilisateur n'est pas authentifié
      this.router.navigate(['/register']);
      return false;
    }


  }

