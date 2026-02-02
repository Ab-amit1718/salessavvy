package com.salessavvy.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.salessavvy.backend.entity.Product;
import com.salessavvy.backend.repository.ProductRepository;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // ============================
    // GET ALL PRODUCTS
    // ============================
    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
}
