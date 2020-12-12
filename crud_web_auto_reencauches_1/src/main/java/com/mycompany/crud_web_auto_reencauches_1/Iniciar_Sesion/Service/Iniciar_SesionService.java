package com.mycompany.crud_web_auto_reencauches_1.Iniciar_Sesion.Service;

import com.mycompany.crud_web_auto_reencauches_1.Cliente.Dto.ClienteDto;
import com.mycompany.crud_web_auto_reencauches_1.Cliente.Entity.Cliente;
import com.mycompany.crud_web_auto_reencauches_1.Cliente.Service.ClienteService;
import com.mycompany.crud_web_auto_reencauches_1.Iniciar_Sesion.Dto.Iniciar_SesionDto;
import com.mycompany.crud_web_auto_reencauches_1.Iniciar_Sesion.Entity.Iniciar_Sesion;
import com.mycompany.crud_web_auto_reencauches_1.Iniciar_Sesion.Repository.Iniciar_SesionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class Iniciar_SesionService {

    @Autowired
    Iniciar_SesionRepository iniciarSesionRepository;

    public List<Iniciar_Sesion> list(){
        return iniciarSesionRepository.findAll();
    }

    public Optional<Iniciar_Sesion> getOne(int id){
        return iniciarSesionRepository.findById(id);
    }

    public void save(Iniciar_Sesion iniciarSesion){
        iniciarSesionRepository.save(iniciarSesion);
    }

    public void delete(int id){
        iniciarSesionRepository.deleteById(id);
    }

    public boolean existsById(int id){
        return iniciarSesionRepository.existsById(id);
    }

    public boolean existsByUsuarioIniciarSesion(int id, String usuario, String nombreColumnaIniciarSesion, String crear_o_actualizar){
        boolean saber = false;
        List<Iniciar_Sesion> list =list();
        for (int i=0; i < list.size(); i++){
            Iniciar_Sesion is = (Iniciar_Sesion) list.get(i);
            if (crear_o_actualizar.equals("crear")){
                if (nombreColumnaIniciarSesion.equals("usuario")){
                    if (is.getUsuario().equals(usuario)){
                        saber = true;
                        break;
                    }
                }
            }
            if (crear_o_actualizar.equals("actualizar")){
                if (nombreColumnaIniciarSesion.equals("usuario")){
                    List<Iniciar_Sesion> list1 = list();
                    if (is.getId() == id){
                        for (int j=0; j < list1.size(); j++){
                            Iniciar_Sesion isAux = (Iniciar_Sesion) list1.get(j);
                            if (is.getUsuario().equals(isAux.getUsuario())){
                                saber = false;
                            }else if (is.getUsuario() != isAux.getUsuario() && isAux.getUsuario().equals(usuario)){
                                saber = true;
                                break;
                            }
                        }
                    }
                }
            }
        }
        return saber;
    }

    @Autowired
    ClienteService clienteService;
    public boolean existsByCedulaCliente(long cedula){
        boolean saber = false;
        List<Cliente> listCliente = clienteService.list();
        for (int i=0; i < listCliente.size(); i++){
            Cliente cliente = (Cliente) listCliente.get(i);
            if (cliente.getCedula() == cedula){
                saber = true;
                break;
            }
        }
        return saber;
    }

    public Iniciar_Sesion existsByCedula(long cedula){
        Iniciar_Sesion iniciarSesionAux = null;
        List<Iniciar_Sesion> listIniciarSesions = list();
        for (int i=0; i < listIniciarSesions.size(); i++){
            Iniciar_Sesion iniciarSesion = (Iniciar_Sesion) listIniciarSesions.get(i);
            if (iniciarSesion.getCedula() == cedula){
                iniciarSesionAux = iniciarSesion;
                break;
            }
        }
        return iniciarSesionAux;
    }

    public boolean deleteInicioSesion(long cedula){
        boolean saber = false;
        List<Iniciar_Sesion> listaIniciarSesion = list();
        for (int i = 0; i < listaIniciarSesion.size(); i++) {
            Iniciar_Sesion iniciarSesion = (Iniciar_Sesion) listaIniciarSesion.get(i);
            if (iniciarSesion.getCedula() == cedula) {
                delete(iniciarSesion.getId());
                saber = true;
            }
        }
        return saber;
    }

}
