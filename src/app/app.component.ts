import { Component, OnInit } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoService } from './ingreso/ingresoService.service';
import { EgresoService } from './egreso/egresoService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'app-presupuesto';
  egresos: Egreso[] = [];
  ingresos: Ingreso[] = [];

  constructor(
    private ingresoService: IngresoService,
    private egresoService: EgresoService
  ) {}

  ngOnInit(): void {
    this.ingresos = this.ingresoService.ingresos;
    this.egresos = this.egresoService.egresos;
  }

  calcularIngresoTotal() {
    let total = 0;
    for (let ingreso of this.ingresos) {
      total += ingreso.getValor();
    }
    return total;
  }

  calcularEgresoTotal() {
    let total = 0;
    for (let egreso of this.egresos) {
      total += egreso.getValor();
    }
    return total;
  }

  calcularPresuspuestoActual(){
    return this.calcularIngresoTotal() - this.calcularEgresoTotal();
  }

  calcularPorcentajeEgresoTotal(){
    return this.calcularEgresoTotal()/this.calcularIngresoTotal();
  }
}
