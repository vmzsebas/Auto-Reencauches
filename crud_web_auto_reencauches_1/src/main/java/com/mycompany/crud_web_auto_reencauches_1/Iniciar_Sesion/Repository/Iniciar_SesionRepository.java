package com.mycompany.crud_web_auto_reencauches_1.Iniciar_Sesion.Repository;

import com.mycompany.crud_web_auto_reencauches_1.Iniciar_Sesion.Entity.Iniciar_Sesion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface Iniciar_SesionRepository extends JpaRepository<Iniciar_Sesion, Integer> {

}
