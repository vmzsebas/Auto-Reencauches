/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.crud_web_auto_reencauches_1.Producto.Dto;

import javax.validation.constraints.NotBlank;

/**
 *
 * @author Manuel Sanchez
 */
public class ProductoDto {
    
    @NotBlank
    private String nombre_prod;

    @NotBlank
    private String marca_prod;

    @NotBlank
    private String nit_prov;

    @NotBlank
    private String logo_prod;
    
    @NotBlank
    private String imagen_prod;

    @NotBlank
    private String descripcion_prod;

    @NotBlank
    private String beneficios_prod;

    @NotBlank
    private long precio_prod;

    @NotBlank
    private int cantidad_ex_prod;

    @NotBlank
    private int peso_prod;

    @NotBlank
    private String peso_unidad;

    @NotBlank
    private int ancho_prod;

    @NotBlank
    private int perfil_prod;

    @NotBlank
    private double rin_prod;

    @NotBlank
    private String eje_prod;

    @NotBlank
    private String terreno_prod;

    @NotBlank
    private String tipo_prod;

    @NotBlank
    private String vehiculo;

    public ProductoDto() {
    }

    public ProductoDto(String nombre_prod, String marca_prod, String nit_prov, String logo_prod,String imagen_prod,String descripcion_prod, String beneficios_prod, long precio_prod, int cantidad_ex_prod, int peso_prod, String peso_unidad, int ancho_prod, int perfil_prod, double rin_prod, String eje_prod, String terreno_prod, String tipo_prod, String vehiculo) {
        this.nombre_prod = nombre_prod;
        this.marca_prod = marca_prod;
        this.nit_prov = nit_prov;
        this.logo_prod = logo_prod;
        this.imagen_prod = imagen_prod;
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

    public String getNombre_prod() {
        return nombre_prod;
    }

    public void setNombre_prod(String nombre_prod) {
        this.nombre_prod = nombre_prod;
    }

    public String getMarca_prod() {
        return marca_prod;
    }

    public void setMarca_prod(String marca_prod) {
        this.marca_prod = marca_prod;
    }

    public String getNit_prov() {
        return nit_prov;
    }

    public void setNit_prov(String nit_prov) {
        this.nit_prov = nit_prov;
    }

    public String getLogo_prod() {
        return logo_prod;
    }

    public void setLogo_prod(String logo_prod) {
        this.logo_prod = logo_prod;
    }

    public String getImagen_prod() {
        return imagen_prod;
    }

    public void setImagen_prod(String imagen_prod) {
        this.imagen_prod = imagen_prod;
    }
    
    

    public String getDescripcion_prod() {
        return descripcion_prod;
    }

    public void setDescripcion_prod(String descripcion_prod) {
        this.descripcion_prod = descripcion_prod;
    }

    public String getBeneficios_prod() {
        return beneficios_prod;
    }

    public void setBeneficios_prod(String beneficios_prod) {
        this.beneficios_prod = beneficios_prod;
    }

    public long getPrecio_prod() {
        return precio_prod;
    }

    public void setPrecio_prod(long precio_prod) {
        this.precio_prod = precio_prod;
    }

    public int getCantidad_ex_prod() {
        return cantidad_ex_prod;
    }

    public void setCantidad_ex_prod(int cantidad_ex_prod) {
        this.cantidad_ex_prod = cantidad_ex_prod;
    }

    public int getPeso_prod() {
        return peso_prod;
    }

    public void setPeso_prod(int peso_prod) {
        this.peso_prod = peso_prod;
    }

    public String getPeso_unidad() {
        return peso_unidad;
    }

    public void setPeso_unidad(String peso_unidad) {
        this.peso_unidad = peso_unidad;
    }

    public int getAncho_prod() {
        return ancho_prod;
    }

    public void setAncho_prod(int ancho_prod) {
        this.ancho_prod = ancho_prod;
    }
    
    

    public int getPerfil_prod() {
        return perfil_prod;
    }

    public void setPerfil_prod(int perfil_prod) {
        this.perfil_prod = perfil_prod;
    }

    public double getRin_prod() {
        return rin_prod;
    }

    public void setRin_prod(double rin_prod) {
        this.rin_prod = rin_prod;
    }

    public String getEje_prod() {
        return eje_prod;
    }

    public void setEje_prod(String eje_prod) {
        this.eje_prod = eje_prod;
    }

    public String getTerreno_prod() {
        return terreno_prod;
    }

    public void setTerreno_prod(String terreno_prod) {
        this.terreno_prod = terreno_prod;
    }

    public String getTipo_prod() {
        return tipo_prod;
    }

    public void setTipo_prod(String tipo_prod) {
        this.tipo_prod = tipo_prod;
    }

    public String getVehiculo() {
        return vehiculo;
    }

    public void setVehiculo(String vehiculo) {
        this.vehiculo = vehiculo;
    }
}
