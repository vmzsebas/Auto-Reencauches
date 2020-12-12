/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.crud_web_auto_reencauches_1.Producto.Repository;

import com.mycompany.crud_web_auto_reencauches_1.Producto.Entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Manuel Sanchez
 */
@Repository
public interface ProductoRepository extends JpaRepository<Producto, Integer>{
    
}
