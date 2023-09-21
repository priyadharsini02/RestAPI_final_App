package com.example.swagger.exception;

public class BookNotFoundException extends RuntimeException{
public BookNotFoundException(Long id) {
	super("Could not find the user with id "+id);
}
}
