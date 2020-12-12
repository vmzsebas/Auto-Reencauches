export class Cliente {
    id?: number;
    nombre: string;
    apellido: string;
    cedula: number;
    telefono: number;
    email: string;
    rol: string;
    usuario: string;
    password: string;
    repeat_password: string;

    constructor(nombre: string, apellido: string,
        cedula: number, telefono: number, 
        email: string, usuario: string) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.cedula = cedula;
            this.telefono = telefono;
            this.email = email;
            this.usuario = usuario;
    }
}