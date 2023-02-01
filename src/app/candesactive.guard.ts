import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface PuedeDesactivar {
  PermitirSalirDeRuta: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable({
  providedIn: 'root'
})

export class CandesactiveGuard implements CanDeactivate<PuedeDesactivar> {
  canDeactivate(component: PuedeDesactivar) {
    return component.PermitirSalirDeRuta ? component.PermitirSalirDeRuta() : true;  }
  
}
