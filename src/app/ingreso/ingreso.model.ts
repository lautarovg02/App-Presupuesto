export class Ingreso{
    constructor(public descripcion: string, public valor:number){}
    
    getValor(){
        return this.valor;
    }

    getDescripcion(){
        return this.descripcion;
    }
}