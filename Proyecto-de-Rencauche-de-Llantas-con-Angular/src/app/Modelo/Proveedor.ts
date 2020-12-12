export class Proveedor {
    id?: number;
    nit: string;
    nombre: string;
    telefono: number;
    direccion: string;

    constructor(nit: string, nombre: string,
        telefono: number, direccion: string) {
            this.nit = nit;
            this.nombre = nombre;
            this.telefono = telefono;
            this.direccion = direccion;
    }
}