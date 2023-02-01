import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { CandesactiveGuard } from './candesactive.guard';
import { FormularioComponent } from './principal/formulario/formulario.component';
import { LoginComponent } from './principal/login/login.component';
import { VistaComponent } from './principal/vista/vista.component';

const routes: Routes = [
  {path: 'vista', component: VistaComponent, canActivate: [CanactivateGuard]},
  {path: 'formulario', component: FormularioComponent, canActivate: [CanactivateGuard]},
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},

  {path: 'formulario/:id', component: FormularioComponent, canActivate: [CanactivateGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
