package com.example.swagger.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.swagger.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}
