package com.mycompany.crud_web_auto_reencauches_1.Proveedor.Controller;

import com.mycompany.crud_web_auto_reencauches_1.Cliente.Dto.ClienteDto;
import com.mycompany.crud_web_auto_reencauches_1.Cliente.Dto.Mensaje;
import com.mycompany.crud_web_auto_reencauches_1.Cliente.Entity.Cliente;
import com.mycompany.crud_web_auto_reencauches_1.Proveedor.Dto.ProveedorDto;
import com.mycompany.crud_web_auto_reencauches_1.Proveedor.Entity.Proveedor;
import com.mycompany.crud_web_auto_reencauches_1.Proveedor.Service.ProveedorService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("formulario-admin-proveedor")
@CrossOrigin(origins = "http://localhost:4200")
public class ProveedorController {

    @Autowired
    ProveedorService proveedorService;

    @GetMapping("/listar-proveedor")
    public ResponseEntity<List<Proveedor>> list() {
        List<Proveedor> list = proveedorService.list();
        return new ResponseEntity<List<Proveedor>>(list, HttpStatus.OK);
    }

    @GetMapping("detalle-id/{id}")
    public ResponseEntity<Proveedor> getById(@PathVariable("id") int id) {
        if (!proveedorService.existsById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        Proveedor proveedor = proveedorService.getOne(id).get();
        return new ResponseEntity(proveedor, HttpStatus.OK);
    }

    @GetMapping("detalle-name/{nombre}")
    public ResponseEntity<Proveedor> getByNombre(@PathVariable("nombre") String nombre) {
        if (!proveedorService.existsByNombre(nombre))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        Proveedor proveedor = proveedorService.getByNombre(nombre).get();
        return new ResponseEntity(proveedor, HttpStatus.OK);
    }

    @PostMapping("/crear-proveedor")
    public ResponseEntity<?> create(@RequestBody ProveedorDto proveedorDto) {
        if (StringUtils.isBlank(proveedorDto.getNombre())) {
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        } else if (proveedorDto.getTelefono() == 0 || proveedorDto.getTelefono() > (Long.parseLong("9999999999"))) {
            return new ResponseEntity(new Mensaje("El telefono debe contener maximo 10 digitos"), HttpStatus.BAD_REQUEST);
        } else if (StringUtils.isBlank(proveedorDto.getDireccion())){
            return new ResponseEntity(new Mensaje("La Direccion es obligatoria"), HttpStatus.BAD_REQUEST);
        }else if (proveedorService.existsByCedulaTelefonoEmailProveedor(0,proveedorDto.getNit(),0, 0, "","nit","crear")) {
            return new ResponseEntity(new Mensaje("El nit que estas ingresando ya esta registrado."), HttpStatus.BAD_REQUEST);
        }else if(proveedorService.existsByCedulaTelefonoEmailProveedor(0,"",0, proveedorDto.getTelefono(),"","telefono","crear")) {
            return new ResponseEntity(new Mensaje("El telefono que estas ingresando ya esta registrado."), HttpStatus.BAD_REQUEST);
        }

        Proveedor proveedor = new Proveedor(proveedorDto.getNit(),
                proveedorDto.getNombre(), proveedorDto.getTelefono(),
                proveedorDto.getDireccion());
        proveedorService.save(proveedor);
        return new ResponseEntity(new Mensaje("El registro se ha realizado con exito"), HttpStatus.OK);
    }

    @PutMapping("/actualizar-proveedor/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody ProveedorDto proveedorDto){
        if (!proveedorService.existsById(id)){
            return new ResponseEntity(new Mensaje("EL id actualizar no existe"),HttpStatus.BAD_REQUEST);
        }else if (StringUtils.isBlank(proveedorDto.getNombre())) {
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }  else if (proveedorDto.getTelefono() <= 0 || proveedorDto.getTelefono() > (Long.parseLong("9999999999"))) {
            return new ResponseEntity(new Mensaje("El telefono debe contener maximo 10 digitos"), HttpStatus.BAD_REQUEST);
        } else if (StringUtils.isBlank(proveedorDto.getDireccion())){
            return new ResponseEntity(new Mensaje("La Direccion es obligatoria"), HttpStatus.BAD_REQUEST);
        }else if (proveedorService.existsByCedulaTelefonoEmailProveedor(0,proveedorDto.getNit(),0,0,"","nit","actualizar")) {
            return new ResponseEntity(new Mensaje("El nit que estas ingresando ya esta registrado."), HttpStatus.BAD_REQUEST);
        }else if(proveedorService.existsByCedulaTelefonoEmailProveedor(id,"",0, proveedorDto.getTelefono(),"","telefono","actualizar")) {
            return new ResponseEntity(new Mensaje("El telefono que estas ingresando ya esta registrado."), HttpStatus.BAD_REQUEST);
        }

        Proveedor proveedor = proveedorService.getOne(id).get();
        proveedor.setNit(proveedorDto.getNit());
        proveedor.setNombre(proveedorDto.getNombre());
        proveedor.setTelefono(proveedorDto.getTelefono());
        proveedor.setDireccion(proveedorDto.getDireccion());
        proveedorService.save(proveedor);
        return new ResponseEntity(new Mensaje("Se han actualizado los campos correctamente"), HttpStatus.OK);
    }

    @DeleteMapping("/eliminar-proveedor/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id){
        if (!proveedorService.existsById(id))
            return new ResponseEntity(new Mensaje("EL id a eliminar no existe"),HttpStatus.OK);
        proveedorService.delete(id);
        return new ResponseEntity(new Mensaje("Se ha eliminado correctamente"),HttpStatus.OK);
    }
}
