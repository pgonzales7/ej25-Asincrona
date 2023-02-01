import { Component } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  usuarioLogueado = false;
  constructor(public autenticacion: AutenticacionService) { }

  ngOnInit() {
    this.usuarioLogueado = this.autenticacion.isLoggedIn('');
    this.autenticacion.changeLoginStatus$.subscribe(
      (loggedStatus: boolean) => {this.usuarioLogueado = loggedStatus;}
    )
  }

  logout() {
    this.autenticacion.logout();
  }
}
