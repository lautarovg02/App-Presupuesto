import { EventEmitter } from "@angular/core";
import { Ingreso } from "./ingreso.model";

export class IngresoService{

    ingresoTotal = new EventEmitter<number>();

    ingresos: Ingreso[] = [
        new Ingreso("Salario",2100.00),
        new Ingreso("Venta coche", 1500.00)
    ];

    agregarIngreso(ingreso: Ingreso){
        this.ingresos.push(ingreso);
    }
    
    eliminarIngreso(index:number){
        this.ingresos.splice(index,1);
    }
    
}