package com.mycompany.crud_web_auto_reencauches_1.Proveedor.Repository;

import com.mycompany.crud_web_auto_reencauches_1.Cliente.Entity.Cliente;
import com.mycompany.crud_web_auto_reencauches_1.Proveedor.Entity.Proveedor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProveedorRepository extends JpaRepository<Proveedor, Integer> {

    Optional<Proveedor> findByNombre(String nombre);
    boolean existsByNombre(String nombre);
}
