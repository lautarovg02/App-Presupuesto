import { Egreso } from "./egreso.model";

export class EgresoService{
    egresos: Egreso[] = [
        new Egreso("Ropa",435.20),
        new Egreso("Alquiler departamento",900.00)
    ];

    agregarEgreso(egreso: Egreso){
        this.egresos.push(egreso);
    }

    eliminarEgreso(index: number){
        this.egresos.splice(index, 1);
    }

}