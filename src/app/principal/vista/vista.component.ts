import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tbldatos } from 'src/app/models/tbldatos';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {

  constructor(private servicio: UserserviceService, private ruta: ActivatedRoute){}

  registros: Tbldatos[] = [];
  
  ngOnInit(){
    this.Vista();
  }

  Vista(){
    this.registros = []
    this.servicio.getVista().subscribe({
      next:(datos: Tbldatos[])=> this.registros = datos,
      complete: ()=> console.log('Servicio recupero los registros de la tabla datos')
    });
  }

  Eliminar(id:string){
    this.servicio.getEliminar(id).subscribe({
      complete: () => console.log('Registro eliminado')
    });

    this.Vista();
  } 
}
