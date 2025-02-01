import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { JwtService } from './service/jwt.service';
import { ServiceCompletService } from './service-complet.service';

@Injectable({
  providedIn: 'root',
})
export class authGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Vérifier si on est dans un environnement navigateur avant d'utiliser `window`
    if (typeof window !== 'undefined' && localStorage.getItem('token')) {
      const userRole = localStorage.getItem('roles');
       console.log(userRole);
      // Récupérer l'URL demandée
      const requestedPath = state.url;
      console.log(requestedPath);


      // Vérifier le rôle et autoriser l'accès en conséquence
      if (userRole === 'DOCTOR') {
        // Routes autorisées pour DOCTOR
        const allowedRoutesForDoctor = ['/dashbord', '/fiche', '/patients'];
        if (allowedRoutesForDoctor.includes(requestedPath)) {
          return true; // Autoriser l'accès
        }

    // Rediriger l'utilisateur s'il n'est pas authentifié
    if (typeof window !== 'undefined') {
      this.router.navigate(['/forbidden']);
    }

    return false;
  }


}
return false;
  }
}
