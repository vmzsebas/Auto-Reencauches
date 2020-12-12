package com.mycompany.crud_web_auto_reencauches_1.Iniciar_Sesion.Entity;

import javax.persistence.*;

@Entity
public class Iniciar_Sesion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private long cedula;
    private String usuario;
    private String password;
    private String repeat_password;
    private String rol;
    private int veces_iniciada;

    public Iniciar_Sesion() {
    }

    public Iniciar_Sesion(long cedula, String usuario,
                          String password, String repeat_password,
                          String rol, int veces_iniciada) {
        this.cedula = cedula;
        this.usuario = usuario;
        this.password = password;
        this.repeat_password = repeat_password;
        this.rol = rol;
        this.veces_iniciada = veces_iniciada;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public long getCedula() {
        return cedula;
    }

    public void setCedula(long cedula) {
        this.cedula = cedula;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRepeat_password() {
        return repeat_password;
    }

    public void setRepeat_password(String repeat_password) {
        this.repeat_password = repeat_password;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }

    public int getVeces_iniciada() {
        return veces_iniciada;
    }

    public void setVeces_iniciada(int veces_iniciada) {
        this.veces_iniciada = veces_iniciada;
    }
}
