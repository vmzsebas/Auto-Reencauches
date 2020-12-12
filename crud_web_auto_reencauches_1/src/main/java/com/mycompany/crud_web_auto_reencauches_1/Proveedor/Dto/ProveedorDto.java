package com.mycompany.crud_web_auto_reencauches_1.Proveedor.Dto;

import javax.validation.constraints.NotBlank;

public class ProveedorDto {

    @NotBlank
    private String nit;
    @NotBlank
    private String nombre;

    @NotBlank
    private long telefono;

    @NotBlank
    private String direccion;

    public ProveedorDto() {
    }

    public ProveedorDto(String nit, String nombre, long telefono, String direccion) {
        this.nit = nit;
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
    }

    public String getNit() {
        return nit;
    }

    public void setNit(String nit) {
        this.nit = nit;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public long getTelefono() {
        return telefono;
    }

    public void setTelefono(long telefono) {
        this.telefono = telefono;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }
}
