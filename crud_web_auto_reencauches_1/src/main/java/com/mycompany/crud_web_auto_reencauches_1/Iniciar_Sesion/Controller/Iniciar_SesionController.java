package com.mycompany.crud_web_auto_reencauches_1.Iniciar_Sesion.Controller;

import com.mycompany.crud_web_auto_reencauches_1.Cliente.Dto.ClienteDto;
import com.mycompany.crud_web_auto_reencauches_1.Cliente.Dto.Mensaje;
import com.mycompany.crud_web_auto_reencauches_1.Cliente.Entity.Cliente;
import com.mycompany.crud_web_auto_reencauches_1.Iniciar_Sesion.Dto.Iniciar_SesionDto;
import com.mycompany.crud_web_auto_reencauches_1.Iniciar_Sesion.Entity.Iniciar_Sesion;
import com.mycompany.crud_web_auto_reencauches_1.Iniciar_Sesion.Service.Iniciar_SesionService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/formulario-admin-iniciar-sesion")
@CrossOrigin(origins = "http://localhost:4200")
public class Iniciar_SesionController {

    @Autowired
    Iniciar_SesionService iniciarSesionService;

    @GetMapping("/listar-iniciar-sesion")
    public ResponseEntity<List<Iniciar_Sesion>> list() {
        List<Iniciar_Sesion> list = iniciarSesionService.list();
        return new ResponseEntity<List<Iniciar_Sesion>>(list, HttpStatus.OK);
    }

    /*@GetMapping("/listar-iniciar-sesion-cedula/{cedula}")
    public ResponseEntity<Iniciar_Sesion> listIniciarSesion(@PathVariable("cedula") long cedula){
        Iniciar_Sesion iniciarSesion = iniciarSesionService.existsByCedula(cedula);
        return new ResponseEntity<Iniciar_Sesion>(iniciarSesion,HttpStatus.OK);
    }*/

    @PostMapping("/crear-iniciar-sesion")
    public ResponseEntity<?> create(@RequestBody Iniciar_SesionDto iniciarSesionDto){
        if ((iniciarSesionDto.getCedula() <= 0) || iniciarSesionDto.getCedula() > (Long.parseLong("9999999999"))){
            return new ResponseEntity(new Mensaje("La cedula debe contener maximo 10 digitos" + iniciarSesionDto.getCedula()), HttpStatus.BAD_REQUEST);
        }else if (StringUtils.isBlank(iniciarSesionDto.getUsuario())){
            return new ResponseEntity(new Mensaje("El usuario debe contener minimo 8 y maximo 20 digitos"), HttpStatus.BAD_REQUEST);
        }else if (StringUtils.isBlank(iniciarSesionDto.getPassword())){
            return new ResponseEntity(new Mensaje("La contraseña debe contener minimo 8 y maximo 20 digitos"), HttpStatus.BAD_REQUEST);
        }else if (StringUtils.isBlank(iniciarSesionDto.getRepeat_password())){
            return new ResponseEntity(new Mensaje("La contraseña debe contener minimo 8 y maximo 20 digitos"), HttpStatus.BAD_REQUEST);
        }else if (iniciarSesionService.existsByUsuarioIniciarSesion(0,iniciarSesionDto.getUsuario(),"usuario","crear")){
            return new ResponseEntity(new Mensaje("El usuario que estas ingresando ya fue utilizado"), HttpStatus.BAD_REQUEST);
        }else if (!iniciarSesionService.existsByCedulaCliente(iniciarSesionDto.getCedula())){
            return new ResponseEntity(new Mensaje("La cedula que estas ingresando no existe"), HttpStatus.BAD_REQUEST);
        }
        System.out.println("");
        System.out.println("iniciarSesionDto.getRol():  "+iniciarSesionDto.getRol());
        System.out.println("");
        Iniciar_Sesion iniciarSesion = new Iniciar_Sesion(iniciarSesionDto.getCedula(),
                iniciarSesionDto.getUsuario(), iniciarSesionDto.getPassword(),
                iniciarSesionDto.getRepeat_password(), iniciarSesionDto.getRol(), 0);
        iniciarSesionService.save(iniciarSesion);
        return new ResponseEntity(new Mensaje("El registro se ha realizado con exito"), HttpStatus.OK);

    }

    @PutMapping("/actualizar-iniciar-sesion/{cedula}")
    public ResponseEntity<?> update(@PathVariable("cedula") long cedula, @RequestBody Iniciar_SesionDto iniciarSesionDto){

        Iniciar_Sesion in = iniciarSesionService.existsByCedula(iniciarSesionDto.getCedula());

        if ((iniciarSesionDto.getCedula() <= 0) || iniciarSesionDto.getCedula() > (Long.parseLong("9999999999"))){
            return new ResponseEntity(new Mensaje("La cedula debe contener maximo 10 digitos" + iniciarSesionDto.getCedula()), HttpStatus.BAD_REQUEST);
        }else if (StringUtils.isBlank(iniciarSesionDto.getUsuario())){
            return new ResponseEntity(new Mensaje("El usuario debe contener minimo 8 y maximo 20 digitos"), HttpStatus.BAD_REQUEST);
        }else if (StringUtils.isBlank(iniciarSesionDto.getPassword())){
            return new ResponseEntity(new Mensaje("La contraseña debe contener minimo 8 y maximo 20 digitos"), HttpStatus.BAD_REQUEST);
        }else if (StringUtils.isBlank(iniciarSesionDto.getRepeat_password())){
            return new ResponseEntity(new Mensaje("La contraseña debe contener minimo 8 y maximo 20 digitos"), HttpStatus.BAD_REQUEST);
        }else if (iniciarSesionService.existsByUsuarioIniciarSesion(in.getId(),iniciarSesionDto.getUsuario(),"usuario","actualizar")){
            return new ResponseEntity(new Mensaje("El usuario que estas ingresando ya fue utilizado"), HttpStatus.BAD_REQUEST);
        }else {
            System.out.println("QUIERA: "+iniciarSesionDto.getUsuario());
            System.out.println("DIDDDD:  "+in.getId());
            Iniciar_Sesion iniciarSesion = iniciarSesionService.getOne(in.getId()).get();
            iniciarSesion.setUsuario(iniciarSesionDto.getUsuario());
            iniciarSesion.setPassword(iniciarSesionDto.getPassword());
            iniciarSesion.setRepeat_password(iniciarSesionDto.getRepeat_password());
            iniciarSesionService.save(iniciarSesion);
            return new ResponseEntity(new Mensaje("Se han actualizado los campos correctamente"), HttpStatus.OK);
        }
    }



}
