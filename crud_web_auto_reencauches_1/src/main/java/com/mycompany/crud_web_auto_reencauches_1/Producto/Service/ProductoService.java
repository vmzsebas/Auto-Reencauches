/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.crud_web_auto_reencauches_1.Producto.Service;

import com.mycompany.crud_web_auto_reencauches_1.Producto.Entity.Producto;
import com.mycompany.crud_web_auto_reencauches_1.Producto.Repository.ProductoRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Manuel Sanchez
 */
@Service
@Transactional
public class ProductoService {

    @Autowired
    ProductoRepository productoRepository;

    public List<Producto> list() {
        return productoRepository.findAll();
    }

    public Optional<Producto> getOne(int id) {
        return productoRepository.findById(id);
    }
    
    public void save(Producto producto){
        productoRepository.save(producto);
    }
    
    public void delete(int id){
        productoRepository.deleteById(id);
    }

}
