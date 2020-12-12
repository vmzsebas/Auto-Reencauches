package com.mycompany.crud_web_auto_reencauches_1.Cliente.Service;

import com.mycompany.crud_web_auto_reencauches_1.Cliente.Entity.Cliente;
import com.mycompany.crud_web_auto_reencauches_1.Cliente.repository.ClienteRepository;
import com.mycompany.crud_web_auto_reencauches_1.Iniciar_Sesion.Entity.Iniciar_Sesion;
import com.mycompany.crud_web_auto_reencauches_1.Iniciar_Sesion.Service.Iniciar_SesionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ClienteService {

    @Autowired
    ClienteRepository clienteRepository;

    public Page<Cliente> paginas(Pageable pageable) {
        return clienteRepository.findAll(pageable);
    }

    public List<Cliente> list() {
        return clienteRepository.findAll();
    }

    public Optional<Cliente> getOne(int id) {
        return clienteRepository.findById(id);
    }

    public Optional<Cliente> getByNombre(String nombre) {
        return clienteRepository.findByNombre(nombre);
    }

    public void save(Cliente cliente) {
        clienteRepository.save(cliente);
    }

    public void delete(int id) {
        clienteRepository.deleteById(id);
    }

    public boolean existsById(int id) {
        return clienteRepository.existsById(id);
    }

    public boolean existsByCedulaTelefonoEmailUsuarioCliente(int id, long cedula, long telefono, String email, String nombreColumnaCliente, String crear_o_actualizar) {
        boolean saber = false;
        List<Cliente> list = list();
        for (int i = 0; i < list().size(); i++) {
            Cliente c = (Cliente) list.get(i);
            if (crear_o_actualizar.equals("crear")) {
                if (nombreColumnaCliente.equals("cedula")) {
                    if (c.getCedula() == cedula) {
                        saber = true;
                        break;
                    }
                } else if (nombreColumnaCliente.equals("telefono")) {
                    if (c.getTelefono() == telefono) {
                        saber = true;
                        break;
                    }
                } else if (nombreColumnaCliente.equals("email")) {
                    if (c.getEmail().equals(email)) {
                        saber = true;
                        break;
                    }
                }
            }
            if (crear_o_actualizar.equals("actualizar")) {
                if (nombreColumnaCliente.equals("cedula")) {
                    List<Cliente> list1 = list();
                    if (c.getId() == id) {
                        for (int j = 0; j < list1.size(); j++) {
                            Cliente cAux = (Cliente) list1.get(j);
                            if (c.getCedula() == cAux.getCedula()) {
                                saber = false;
                            } else if (c.getCedula() != cAux.getCedula() && cAux.getCedula() == cedula) {
                                saber = true;
                                break;
                            }
                        }
                    }
                } else if (nombreColumnaCliente.equals("telefono")) {
                    List<Cliente> list1 = list();
                    if (c.getId() == id) {
                        for (int j = 0; j < list1.size(); j++) {
                            Cliente cAux = (Cliente) list1.get(j);
                            if (c.getTelefono() == cAux.getTelefono()) {
                                saber = false;
                            } else if (c.getTelefono() != cAux.getTelefono() && cAux.getTelefono() == telefono) {
                                saber = true;
                                break;
                            }
                        }
                    }
                } else if (nombreColumnaCliente.equals("email")) {
                    List<Cliente> list1 = list();
                    if (c.getId() == id) {
                        System.out.println("");
                        for (int j = 0; j < list1.size(); j++) {
                            Cliente cAux = (Cliente) list1.get(j);
                            if (c.getEmail() == (cAux.getEmail())) {
                                saber = false;
                            } else if (c.getEmail() != cAux.getEmail() && cAux.getEmail().equals(email)) {
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
    Iniciar_SesionService iniciar_SesionService;

    public Iniciar_Sesion datoInicioSesion(long cedula) {
        Iniciar_Sesion iniciar_Sesion = null;
        List<Iniciar_Sesion> lista_inicioSesion = iniciar_SesionService.list();
        for (int i = 0; i < lista_inicioSesion.size(); i++) {
            Iniciar_Sesion inicioSesion = (Iniciar_Sesion) lista_inicioSesion.get(i);
            if (inicioSesion.getCedula() == cedula) {
                String asteriscos = cargarContraseñaAsteriscos(inicioSesion.getPassword());
                inicioSesion.setPassword(asteriscos);
                inicioSesion.setRepeat_password(asteriscos);
                iniciar_Sesion = inicioSesion;
                break;
            }
        }
        return iniciar_Sesion;
    }

    public String cargarContraseñaAsteriscos(String password) {
        String asteriscos = "";
        for (int index = 1; index <= password.length(); index++) {
            if (index <= password.length()) {
                asteriscos = '*' + asteriscos;
            }
        }
        return asteriscos;
    }

    public boolean existsByNombre(String nombre) {
        return clienteRepository.existsByNombre(nombre);
    }

}
