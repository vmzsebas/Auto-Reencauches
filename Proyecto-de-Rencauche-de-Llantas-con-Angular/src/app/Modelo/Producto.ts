export class Producto {

    id?: number;
    nombre_prod: string;
    marca_prod: string;
    nit_prov: string;
    logo_prod: string;
    descripcion_prod: string;
    beneficios_prod: string;
    precio_prod: number;
    cantidad_ex_prod: number;
    peso_prod: number;
    peso_unidad: string;
    ancho_prod: number;
    perfil_prod: number;
    rin_prod: number;
    eje_prod: string;
    terreno_prod: string;
    tipo_prod: string;
    vehiculo: string;

    constructor(nombre_prod: string,
        marca_prod: string,
        nit_prov: string,
        logo_prod: string,
        descripcion_prod: string,
        beneficios_prod: string,
        precio_prod: number,
        cantidad_ex_prod: number,
        peso_prod: number,
        peso_unidad: string,
        ancho_prod: number,
        perfil_prod: number,
        rin_prod: number,
        eje_prod: string,
        terreno_prod: string,
        tipo_prod: string,
        vehiculo: string) {

        this.nombre_prod = nombre_prod;
        this.marca_prod = marca_prod;
        this.nit_prov = nit_prov;
        this.logo_prod = logo_prod;
        this.descripcion_prod = descripcion_prod;
        this.beneficios_prod = beneficios_prod;
        this.precio_prod = precio_prod;
        this.cantidad_ex_prod = cantidad_ex_prod;
        this.peso_prod = peso_prod;
        this.peso_unidad = peso_unidad;
        this.ancho_prod = ancho_prod;
        this.perfil_prod = perfil_prod;
        this.rin_prod = rin_prod;
        this.eje_prod = eje_prod;
        this.terreno_prod = terreno_prod;
        this.tipo_prod = tipo_prod;
        this.vehiculo = vehiculo;
    }

}
