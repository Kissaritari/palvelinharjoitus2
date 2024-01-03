package com.example.application.endpoints;


import com.example.application.Todo;
import com.example.application.TodoRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;

import java.util.Date;
import java.util.List;

@Endpoint
@AnonymousAllowed
public class TodoEndpoint {

    private TodoRepository repository;
    TodoEndpoint(TodoRepository repository) {
        this.repository = repository;
    }

    public List<Todo> findAll() {
        return repository.findAll();
    }

    public Todo add(String task, String title ) {
        System.out.println("luodaan todo osista task: " + task );
        Todo todo = new Todo(task, title);
        System.out.println("todo on: "+todo.getTask());

        return repository.save(todo);
    }

    public Todo update(Todo todo) {
        return repository.save(todo);
    }
}
