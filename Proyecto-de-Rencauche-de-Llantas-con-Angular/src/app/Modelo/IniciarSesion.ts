export class IniciarSesion {
    id?: number;
    cedula: number;
    usuario: string;
    password: string;
    repeat_password: string;
    rol: string;
    veces_iniciada: number;

    constructor(cedula: number, usuario: string,
        password: string, repeat_password: string,
        rol: string, veces_iniciada: number) {
            this.cedula = cedula;
            this.usuario = usuario;
            this.password = password;
            this.repeat_password = repeat_password;
            this.rol = rol;
            this.veces_iniciada = veces_iniciada;
    }
}


