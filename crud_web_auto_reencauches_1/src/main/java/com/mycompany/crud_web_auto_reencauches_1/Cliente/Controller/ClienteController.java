package com.mycompany.crud_web_auto_reencauches_1.Cliente.Controller;

import com.mycompany.crud_web_auto_reencauches_1.Cliente.Dto.ClienteDto;
import com.mycompany.crud_web_auto_reencauches_1.Cliente.Dto.Mensaje;
import com.mycompany.crud_web_auto_reencauches_1.Cliente.Entity.Cliente;
import com.mycompany.crud_web_auto_reencauches_1.Cliente.Entity.Cliente1;
import com.mycompany.crud_web_auto_reencauches_1.Cliente.Service.ClienteService;
import com.mycompany.crud_web_auto_reencauches_1.Iniciar_Sesion.Controller.Iniciar_SesionController;
import com.mycompany.crud_web_auto_reencauches_1.Iniciar_Sesion.Dto.Iniciar_SesionDto;
import com.mycompany.crud_web_auto_reencauches_1.Iniciar_Sesion.Entity.Iniciar_Sesion;
import com.mycompany.crud_web_auto_reencauches_1.Iniciar_Sesion.Service.Iniciar_SesionService;
import java.util.LinkedList;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import javax.swing.JOptionPane;

@RestController
@RequestMapping("/formulario-admin-cliente")
@CrossOrigin(origins = "http://localhost:4200")
public class ClienteController {

    @Autowired
    ClienteService clienteService;

    @GetMapping("/listar-clientePaginacion")
    public ResponseEntity<Page<Cliente>> paginacion(
            @RequestParam(defaultValue = "0") int pagina,
            @RequestParam(defaultValue = "10") int tamaño,
            @RequestParam(defaultValue = "nombre") String order,
            @RequestParam(defaultValue = "true") boolean asc
    ) {
        Page<Cliente> clientes = clienteService.paginas(PageRequest.of(pagina, tamaño, Sort.by(order)));
        if (!asc) {
            clientes = clienteService.paginas(PageRequest.of(pagina, tamaño, Sort.by(order).descending()));
        }
        return new ResponseEntity<Page<Cliente>>(clientes, HttpStatus.OK);
    }

    @GetMapping("/listar-cliente")
    public ResponseEntity<List<Cliente>> list() {
        List<Cliente> list = clienteService.list();
        return new ResponseEntity<List<Cliente>>(list, HttpStatus.OK);
    }

    @GetMapping("/listar-cliente-1")
    public ResponseEntity<List<Cliente1>> list1() {
        LinkedList<Cliente1> l1 = new LinkedList();

        for (int i = 0; i < clienteService.list().size(); i++) {
            Cliente cliente = (Cliente) clienteService.list().get(i);
            Iniciar_Sesion inicioSesion = clienteService.datoInicioSesion(cliente.getCedula());
            Cliente1 cliente1 = new Cliente1(cliente.getNombre(), cliente.getApellido(), cliente.getCedula(), cliente.getTelefono(),
                    cliente.getEmail(), inicioSesion.getUsuario(), inicioSesion.getPassword(), inicioSesion.getRepeat_password(), inicioSesion.getRol());
            cliente1.setId(cliente.getId());
            l1.add(cliente1);
        }
        List<Cliente1> lista1 = (List) l1;
        return new ResponseEntity<List<Cliente1>>(lista1, HttpStatus.OK);
    }

    @GetMapping("detalle-id/{id}")
    public ResponseEntity<Cliente> getById(@PathVariable("id") int id) {
        if (!clienteService.existsById(id)) {
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        }
        Cliente cliente = clienteService.getOne(id).get();
        return new ResponseEntity(cliente, HttpStatus.OK);
    }

    @GetMapping("detalle-name/{nombre}")
    public ResponseEntity<Cliente> getByNombre(@PathVariable("nombre") String nombre) {
        if (!clienteService.existsByNombre(nombre)) {
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        }
        Cliente cliente = clienteService.getByNombre(nombre).get();
        return new ResponseEntity(cliente, HttpStatus.OK);
    }

    @Autowired
    Iniciar_SesionService iniciarSesionService;

    @PostMapping("/crear-cliente")
    public ResponseEntity<?> create(@RequestBody ClienteDto clienteDto) {
        if (StringUtils.isBlank(clienteDto.getNombre())) {
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        } else if (StringUtils.isBlank(clienteDto.getApellido())) {
            return new ResponseEntity(new Mensaje("El apellido es obligatorio"), HttpStatus.BAD_REQUEST);
        } else if ((clienteDto.getCedula() <= 0 || clienteDto.getCedula() > (Long.parseLong("9999999999")))) {
            return new ResponseEntity(new Mensaje("La cedula debe contener maximo 10 digitos " + clienteDto.getCedula()), HttpStatus.BAD_REQUEST);
        } else if (clienteDto.getTelefono() <= 0 || clienteDto.getTelefono() > (Long.parseLong("9999999999"))) {
            return new ResponseEntity(new Mensaje("El telefono debe contener maximo 10 digitos"), HttpStatus.BAD_REQUEST);
        } else if (StringUtils.isBlank(clienteDto.getEmail())) {
            return new ResponseEntity(new Mensaje("El email es obligatorio"), HttpStatus.BAD_REQUEST);
        } else if (clienteService.existsByCedulaTelefonoEmailUsuarioCliente(0, clienteDto.getCedula(), 0, "", "cedula", "crear")) {
            return new ResponseEntity(new Mensaje("La cedula que estas ingresando ya esta registrada."), HttpStatus.BAD_REQUEST);
        } else if (clienteService.existsByCedulaTelefonoEmailUsuarioCliente(0, 0, clienteDto.getTelefono(), "", "telefono", "crear")) {
            return new ResponseEntity(new Mensaje("El telefono que estas ingresando ya esta registrado."), HttpStatus.BAD_REQUEST);
        } else if (clienteService.existsByCedulaTelefonoEmailUsuarioCliente(0, 0, 0, clienteDto.getEmail(), "email", "crear")) {
            return new ResponseEntity(new Mensaje("El email que estas ingresando ya fue utilizado."), HttpStatus.BAD_REQUEST);
        } else if (iniciarSesionService.existsByUsuarioIniciarSesion(0, clienteDto.getUsuario(), "usuario", "crear")) {
            return new ResponseEntity(new Mensaje("El usuario que estas ingresando ya fue utilizado"), HttpStatus.BAD_REQUEST);
        }
        Cliente cliente = new Cliente(clienteDto.getNombre(),
                clienteDto.getApellido(), clienteDto.getCedula(),
                clienteDto.getTelefono(), clienteDto.getEmail());
        clienteService.save(cliente);
        return new ResponseEntity(new Mensaje("El registro se ha realizado con exito"), HttpStatus.OK);

    }

    @PutMapping("/actualizar-cliente/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody ClienteDto clienteDto) {

        Iniciar_Sesion in = iniciarSesionService.existsByCedula(clienteDto.getCedula());
        System.out.println("IN IDD -> " + in.getId());
        if (!clienteService.existsById(id)) {
            return new ResponseEntity(new Mensaje("EL id actualizar no existe"), HttpStatus.BAD_REQUEST);
        } else if (StringUtils.isBlank(clienteDto.getNombre())) {
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        } else if (StringUtils.isBlank(clienteDto.getApellido())) {
            return new ResponseEntity(new Mensaje("El apellido es obligatorio"), HttpStatus.BAD_REQUEST);
        } else if ((clienteDto.getCedula() <= 0 || clienteDto.getCedula() > (Long.parseLong("9999999999")))) {
            return new ResponseEntity(new Mensaje("La cedula debe contener maximo 10 digitos " + clienteDto.getCedula()), HttpStatus.BAD_REQUEST);
        } else if (clienteDto.getTelefono() <= 0 || clienteDto.getTelefono() > (Long.parseLong("9999999999"))) {
            return new ResponseEntity(new Mensaje("El telefono debe contener maximo 10 digitos"), HttpStatus.BAD_REQUEST);
        } else if (StringUtils.isBlank(clienteDto.getEmail())) {
            return new ResponseEntity(new Mensaje("El email es obligatorio"), HttpStatus.BAD_REQUEST);
        } else if (clienteService.existsByCedulaTelefonoEmailUsuarioCliente(id, clienteDto.getCedula(), 0, "", "cedula", "actualizar")) {
            return new ResponseEntity(new Mensaje("La cedula que estas ingresando ya esta registrada."), HttpStatus.BAD_REQUEST);
        } else if (clienteService.existsByCedulaTelefonoEmailUsuarioCliente(id, 0, clienteDto.getTelefono(), "", "telefono", "actualizar")) {
            return new ResponseEntity(new Mensaje("El telefono que estas ingresando ya esta registrado."), HttpStatus.BAD_REQUEST);
        } else if (clienteService.existsByCedulaTelefonoEmailUsuarioCliente(id, 0, 0, clienteDto.getEmail(), "email", "actualizar")) {
            return new ResponseEntity(new Mensaje("El email que estas ingresando ya fue utilizado."), HttpStatus.BAD_REQUEST);
        } else if (iniciarSesionService.existsByUsuarioIniciarSesion(in.getId(), clienteDto.getUsuario(), "usuario", "actualizar")) {
            return new ResponseEntity(new Mensaje("El usuario que estas ingresando ya fue utilizado"), HttpStatus.BAD_REQUEST);
        } else {
            Cliente cliente = clienteService.getOne(id).get();
            cliente.setNombre(clienteDto.getNombre());
            cliente.setApellido(clienteDto.getApellido());
            cliente.setCedula(clienteDto.getCedula());
            cliente.setTelefono(clienteDto.getTelefono());
            cliente.setEmail(clienteDto.getEmail());
            clienteService.save(cliente);
            return new ResponseEntity(new Mensaje("Se han actualizado los campos correctamente"), HttpStatus.OK);
        }
    }

    @DeleteMapping("/eliminar-cliente/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        if (!clienteService.existsById(id)) {
            return new ResponseEntity(new Mensaje("EL id a eliminar no existe"), HttpStatus.OK);
        } else {
            Cliente cliente = clienteService.getOne(id).get();
            System.out.println("Cedula:  " + cliente.getCedula());
            if (!iniciarSesionService.deleteInicioSesion(cliente.getCedula())) {
                return new ResponseEntity(new Mensaje("La cedula a eliminar no existe"), HttpStatus.OK);
            } else {
                clienteService.delete(id);
                return new ResponseEntity(new Mensaje("Se ha eliminado correctamente"), HttpStatus.OK);
            }
        }
    }

}
