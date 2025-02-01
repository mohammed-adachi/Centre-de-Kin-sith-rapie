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

  canActivate(): boolean {
    // Vérifier si on est dans un environnement navigateur avant d'utiliser `window`
    if (typeof window !== 'undefined' && localStorage.getItem('token')) {
      return true;
    }

    // Rediriger l'utilisateur s'il n'est pas authentifié
    if (typeof window !== 'undefined') {
      this.router.navigate(['/login']);
    }

    return false;
  }
}
