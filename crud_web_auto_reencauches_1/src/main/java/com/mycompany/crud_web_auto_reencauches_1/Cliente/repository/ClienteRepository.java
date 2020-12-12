package com.mycompany.crud_web_auto_reencauches_1.Cliente.repository;


import com.mycompany.crud_web_auto_reencauches_1.Cliente.Entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

    Optional<Cliente> findByNombre(String nombre);
    boolean existsByNombre(String nombre);

}
