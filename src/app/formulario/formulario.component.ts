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
  valueSelect:string;

  agregarIngreso(){
    let nuevoIngreso = new Ingreso(this.inputDescripcion,this.inputValor);
    this.ingresoService.agregarIngreso(nuevoIngreso);
  }

  agregarEgreso(){
    let nuevoEgreso = new Egreso(this.inputDescripcion,this.inputValor);
    this.egresoService.agregarEgreso(nuevoEgreso);
  }

  ingresoEstaSeleccionado(){
    alert(this.valueSelect = 'ing' ? "ing" : "false");
  }

  tipoOperacion(event:Event){
  
  }

  agregarValor() {
    if(this.valueSelect == "operacionIngreso") this.agregarIngreso()
    else this.agregarEgreso();

    this.inputDescripcion = " ";
    this.inputValor = 0;
  }

}
