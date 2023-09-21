package com.example.swagger.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.swagger.entity.Cart;

public interface CartRepository extends JpaRepository<Cart, Long> {
	
}