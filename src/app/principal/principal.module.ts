import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { VistaComponent } from './vista/vista.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    MenuComponent,
    VistaComponent,
    FormularioComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  exports:[
    MenuComponent,
    VistaComponent,
    FormularioComponent,
    LoginComponent
  ]
})
export class PrincipalModule { }
