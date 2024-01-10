import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from './egresoService.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrl: './egreso.component.css'
})
export class EgresoComponent implements OnInit {
  egresos:Egreso[] = [];
  @Input() ingresoTotal:number = 0;

  constructor(private egresoService:EgresoService){}

  ngOnInit(){
    this.egresos = this.egresoService.egresos;
  }

  eliminarEgreso(index: number) {
    this.egresoService.eliminarEgreso(index);
  }

  calcularPorcentaje(egreso:Egreso){
    return egreso.getValor()/this.ingresoTotal;
  }

}
