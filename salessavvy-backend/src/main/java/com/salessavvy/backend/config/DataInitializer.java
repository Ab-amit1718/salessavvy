package com.salessavvy.backend.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.salessavvy.backend.entity.Product;
import com.salessavvy.backend.repository.ProductRepository;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initProducts(ProductRepository productRepository) {
        return args -> {

            if (productRepository.count() > 0) {
                return; // don’t duplicate data
            }

            Product p1 = new Product();
            p1.setName("Test Product");
            p1.setDescription("Demo product for orders");
            p1.setPrice(99.99);

            Product p2 = new Product();
            p2.setName("Second Product");
            p2.setDescription("Another demo product");
            p2.setPrice(149.99);

            productRepository.save(p1);
            productRepository.save(p2);
        };
    }
}
