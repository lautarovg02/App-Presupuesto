import { Component } from '@angular/core';
import { IngresoService } from '../ingreso/ingresoService.service';
import { EgresoService } from '../egreso/egresoService.service';
import { Egreso } from '../egreso/egreso.model';
import { Ingreso } from '../ingreso/ingreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {
  
  constructor(private ingresoService: IngresoService, private egresoService: EgresoService){}

  inputDescripcion:string;
  inputValor:number;

  agregarIngreso(){
    let nuevoIngreso = new Ingreso(this.inputDescripcion,this.inputValor);
    this.ingresoService.agregarIngreso(nuevoIngreso);
    this.inputDescripcion = " ";
    this.inputValor = 0;
  }

  agregarEgreso(){
    let nuevoEgreso = new Egreso(this.inputDescripcion,this.inputValor);
    this.egresoService.agregarEgreso(nuevoEgreso);
    this.inputDescripcion = " ";
    this.inputValor = 0;
  }

}