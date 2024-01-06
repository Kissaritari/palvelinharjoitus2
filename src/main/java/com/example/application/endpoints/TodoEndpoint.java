package com.example.application.endpoints;


import com.example.application.Todo;
import com.example.application.TodoRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import jakarta.annotation.security.PermitAll;

import java.util.Date;
import java.util.List;

@Endpoint
@PermitAll
public class TodoEndpoint {

    private TodoRepository repository;
    TodoEndpoint(TodoRepository repository) {
        this.repository = repository;
    }

    public List<Todo> findAll() {
        return repository.findAll();
    }

    public Todo add(String task, String title, String date ) {
        Date parsedDate = java.sql.Date.valueOf(date);
        Todo todo = new Todo(task, title,parsedDate);
        return repository.save(todo);
    }
    public Todo addWithoutDate(String task, String title) {
        System.out.println("Tyltiin tänne ilman datea");
        Todo todo = new Todo(task,title);
        return repository.save(todo);
    }

    public Todo update(Todo todo) {
        return repository.save(todo);
    }

    public Todo delete(Todo todo) {
        repository.delete(todo);
        return todo;
    }
}
