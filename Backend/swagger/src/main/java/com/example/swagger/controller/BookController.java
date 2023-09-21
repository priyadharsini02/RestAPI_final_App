package com.example.swagger.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.swagger.entity.Book;
import com.example.swagger.exception.BookNotFoundException;
import com.example.swagger.repository.BookRepository;

@RestController
@CrossOrigin("http://localhost:5173")
public class BookController {
@Autowired
private BookRepository bookRepository;

@PostMapping("/add")
public Book addBook(@RequestBody Book book) {
	return bookRepository.save(book);
}

@GetMapping("/books")
public List<Book> getAllBooks(){
	return bookRepository.findAll();
}

@GetMapping("/book/{id}")
public Book getBookById(@PathVariable Long id) {
	return bookRepository.findById(id)
			.orElseThrow(()-> new BookNotFoundException(id));
}

@PutMapping("/book/{id}")
public Book updateById(@RequestBody Book newBook,@PathVariable Long id) {
	return bookRepository.findById(id)
			.map(book -> {
				book.setbookName(newBook.getbookName());
				book.setBookDescription(newBook.getBookDescription());
				book.setPrice(newBook.getPrice());
				book.setQuantity(newBook.getQuantity());
				return bookRepository.save(book);
			}).orElseThrow(()-> new BookNotFoundException(id));
}


@DeleteMapping("/book/{id}")
public String deleteBookById(@PathVariable Long id) {
	if(!bookRepository.existsById(id)) {
		throw new BookNotFoundException(id);
	}
	bookRepository.deleteById(id);
	return "Book with id "+id+" has been deleted successfully";
}
}
