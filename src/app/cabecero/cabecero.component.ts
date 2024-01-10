import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrl: './cabecero.component.css'
})
export class CabeceroComponent {
    @Input() presupuestoActual: number = 0;
    @Input() porcentajeTotalEgreso: number = 0;
    @Input() egresoTotal: number = 0;
    @Input() ingresoTotal: number = 0;
}
