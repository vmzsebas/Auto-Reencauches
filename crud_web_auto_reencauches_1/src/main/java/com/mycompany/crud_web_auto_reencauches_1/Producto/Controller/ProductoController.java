/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.crud_web_auto_reencauches_1.Producto.Controller;

import com.mycompany.crud_web_auto_reencauches_1.Cliente.Dto.Mensaje;
import com.mycompany.crud_web_auto_reencauches_1.Producto.Dto.ProductoDto;
import com.mycompany.crud_web_auto_reencauches_1.Producto.Entity.Producto;
import com.mycompany.crud_web_auto_reencauches_1.Producto.Service.ProductoService;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Manuel Sanchez
 */
@RestController
@RequestMapping("/formulario-admin-producto")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductoController {

    @Autowired
    ProductoService productoService;

    @GetMapping("/listar-producto")
    public ResponseEntity<List<Producto>> list() {
        List<Producto> list = productoService.list();
        return new ResponseEntity<List<Producto>>(list, HttpStatus.OK);
    }

    @PostMapping("/crear-producto")
    public ResponseEntity<?> create(@RequestBody ProductoDto productoDto) {
        if (StringUtils.isBlank(productoDto.getNombre_prod())) {
            return new ResponseEntity(new Mensaje("El nombre del producto es obligatorio"), HttpStatus.BAD_REQUEST);
        } else if (StringUtils.isBlank(productoDto.getMarca_prod())) {
            return new ResponseEntity(new Mensaje("La marca del producto es obligatorio."), HttpStatus.BAD_REQUEST);
        } else if (StringUtils.isBlank(productoDto.getNit_prov())) {
            return new ResponseEntity(new Mensaje("El nit del proveedor es necesario."), HttpStatus.BAD_REQUEST);
        } else if (StringUtils.isBlank(productoDto.getLogo_prod())) {
            return new ResponseEntity(new Mensaje("El logo del producto es necesario."), HttpStatus.BAD_REQUEST);
        } else if (StringUtils.isBlank(productoDto.getImagen_prod())) {
            return new ResponseEntity(new Mensaje("La imagen del producto es necesario."), HttpStatus.BAD_REQUEST);
        } else if (StringUtils.isBlank(productoDto.getDescripcion_prod())) {
            return new ResponseEntity(new Mensaje("La descripcion del producto es necesaria."), HttpStatus.BAD_REQUEST);
        } else if (StringUtils.isBlank(productoDto.getBeneficios_prod())) {
            return new ResponseEntity(new Mensaje("El campo beneficio es necesario."), HttpStatus.BAD_REQUEST);
        } else if (productoDto.getPrecio_prod() <= 0) {
            return new ResponseEntity(new Mensaje("El precio del producto es necesario y debe ser mayor que cero."), HttpStatus.BAD_REQUEST);
        } else if (productoDto.getCantidad_ex_prod() <= 0) {
            return new ResponseEntity(new Mensaje("La cantidad del producto es necesario y debe ser mayor que cero."), HttpStatus.BAD_REQUEST);
        } else if (productoDto.getPeso_prod() <= 0) {
            return new ResponseEntity(new Mensaje("El peso del producto es necesario y debe ser mayor que cero."), HttpStatus.BAD_REQUEST);
        } else if (StringUtils.isBlank(productoDto.getPeso_unidad())) {
            return new ResponseEntity(new Mensaje("La unidad de peso del producto es necesario."), HttpStatus.BAD_REQUEST);
        } else if (productoDto.getAncho_prod() <= 0) {
            return new ResponseEntity(new Mensaje("El ancho del producto es necesario y debe ser mayor que cero"), HttpStatus.BAD_REQUEST);
        } else if (productoDto.getPerfil_prod() <= 0) {
            return new ResponseEntity(new Mensaje("El perfil del producto es necesario y debe ser menor que cero."), HttpStatus.BAD_REQUEST);
        } else if (productoDto.getRin_prod() <= 0) {
            return new ResponseEntity(new Mensaje("EL rin del producto es necesario."), HttpStatus.BAD_REQUEST);
        } else if (StringUtils.isBlank(productoDto.getEje_prod())) {
            return new ResponseEntity(new Mensaje("EL eje del producto es necesario."), HttpStatus.BAD_REQUEST);
        } else if (StringUtils.isBlank(productoDto.getTerreno_prod())) {
            return new ResponseEntity(new Mensaje("EL campo terreno del producto es necesario."), HttpStatus.BAD_REQUEST);
        } else if (StringUtils.isBlank(productoDto.getTipo_prod())) {
            return new ResponseEntity(new Mensaje("EL tipo del producto es necesario."), HttpStatus.BAD_REQUEST);
        } else if (StringUtils.isBlank(productoDto.getVehiculo())) {
            return new ResponseEntity(new Mensaje("EL campo vehiculo del producto es necesario."), HttpStatus.BAD_REQUEST);
        }
        Producto producto = new Producto(productoDto.getNombre_prod(), productoDto.getMarca_prod(), productoDto.getNit_prov(), productoDto.getLogo_prod(),
                productoDto.getImagen_prod(), productoDto.getDescripcion_prod(), productoDto.getBeneficios_prod(), productoDto.getPrecio_prod(),
                productoDto.getCantidad_ex_prod(), productoDto.getPeso_prod(), productoDto.getPeso_unidad(), productoDto.getAncho_prod(), productoDto.getPerfil_prod(),
                productoDto.getRin_prod(), productoDto.getEje_prod(), productoDto.getTerreno_prod(), productoDto.getTipo_prod(), productoDto.getVehiculo());
        productoService.save(producto);
        return new ResponseEntity(new Mensaje("El registro se ha realizado con exito"), HttpStatus.OK);
    }
}
