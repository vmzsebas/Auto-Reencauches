package com.mycompany.crud_web_auto_reencauches_1.Proveedor.Service;

import com.mycompany.crud_web_auto_reencauches_1.Cliente.Entity.Cliente;
import com.mycompany.crud_web_auto_reencauches_1.Proveedor.Entity.Proveedor;
import com.mycompany.crud_web_auto_reencauches_1.Proveedor.Repository.ProveedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ProveedorService {

    @Autowired
    ProveedorRepository proveedorRepository;

    public List<Proveedor> list(){ return proveedorRepository.findAll(); }

    public Optional<Proveedor> getOne(int id){
        return proveedorRepository.findById(id);
    }

    public Optional<Proveedor> getByNombre(String nombre){
        return proveedorRepository.findByNombre(nombre);
    }

    public void save(Proveedor proveedor){
        proveedorRepository.save(proveedor);
    }

    public void delete(int id){
        proveedorRepository.deleteById(id);
    }

    public boolean existsById(int id){
        return proveedorRepository.existsById(id);
    }

    public boolean existsByNombre(String nombre){
        return proveedorRepository.existsByNombre(nombre);
    }

    public boolean existsByCedulaTelefonoEmailProveedor(int id, String nit, long cedula, long telefono, String email, String nombreColumnaProveedor, String crear_o_actualizar) {
        boolean saber = false;
        List<Proveedor> list = list();
        for (int i = 0; i < list().size(); i++) {
            Proveedor p = (Proveedor) list.get(i);
            if (crear_o_actualizar.equals("crear")) {
                if (nombreColumnaProveedor.equals("nit")) {
                    if (p.getNit().equals(nit)) {
                        saber = true;
                        break;
                    }
                }else if (nombreColumnaProveedor.equals("telefono")) {
                    if (p.getTelefono() == telefono) {
                        saber = true;
                        break;
                    }
                }
            }
            if (crear_o_actualizar.equals("actualizar")){

                if (nombreColumnaProveedor.equals("nit")){
                    List<Proveedor> list1 = list();
                    if (p.getId() == id){
                        for (int j=0; j< list1.size(); j++){
                            Proveedor cAux = (Proveedor) list1.get(j);
                            if (p.getNit().equals(cAux.getNit())){
                                saber = false;
                            }else if (p.getNit() != cAux.getNit() && cAux.getNit().equals(nit)){
                                saber = true;
                                break;
                            }
                        }
                    }
                }else if (nombreColumnaProveedor.equals("telefono")){
                    List<Proveedor> list1 = list();
                    if (p.getId() == id){
                        for (int j=0; j< list1.size(); j++){
                            Proveedor cAux = (Proveedor) list1.get(j);
                            if (p.getTelefono() == cAux.getTelefono()){
                                saber = false;
                            }else if (p.getTelefono() != cAux.getTelefono() && cAux.getTelefono() == telefono){
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
}
