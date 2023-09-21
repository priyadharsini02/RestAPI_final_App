package com.example.swagger.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.swagger.entity.Book;
import com.example.swagger.entity.Cart;
import com.example.swagger.exception.BookNotFoundException;
import com.example.swagger.repository.BookRepository;
import com.example.swagger.repository.CartRepository;

@RestController
@CrossOrigin("http://localhost:5173")
@RequestMapping("/api/cart")
public class CartController {
	@Autowired
    private CartRepository cartRepository;

    @Autowired
    private BookRepository bookRepository;

    @PostMapping("/add")
    public void addItemToCart(@RequestParam Long itemId, @RequestParam Long cartId) {
        Book book = bookRepository.findById(itemId).orElseThrow(() -> new IllegalArgumentException("Item not found"));
        Cart cart = cartRepository.findById(cartId).orElseThrow(() -> new IllegalArgumentException("Cart not found"));

        cart.getBooks().add(book);
        cartRepository.save(cart);
    }
    
    @GetMapping("/cartbook/{id}")
    public Book getBookById(@PathVariable Long id) {
    	return bookRepository.findById(id)
    			.orElseThrow(()-> new BookNotFoundException(id));
    }

}
