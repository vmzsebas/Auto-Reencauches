package com.mycompany.crud_web_auto_reencauches_1.Cliente.Dto;

import javax.validation.constraints.NotBlank;

public class ClienteDto {


    @NotBlank
    private String nombre;
    @NotBlank
    private String apellido;
    @NotBlank
    private long cedula;
    @NotBlank
    private long telefono;
    @NotBlank
    private String email;

    private String usuario;

    public ClienteDto() {
    }

    public ClienteDto(String nombre, String apellido,
                      long cedula, long telefono,
                      String email, String usuario) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.telefono = telefono;
        this.email = email;
        this.usuario = usuario;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public long getCedula() {
        return cedula;
    }

    public void setCedula(long cedula) {
        this.cedula = cedula;
    }

    public long getTelefono() {
        return telefono;
    }

    public void setTelefono(long telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }
}
