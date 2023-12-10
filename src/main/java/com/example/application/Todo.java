package com.example.application;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
public class Todo {
    @Id
    @GeneratedValue
    @Getter @Setter private long id;
    @Getter @Setter private String task;
    @Getter @Setter private boolean done;

    public Todo(String task) {
        this.task = task;
    }

    public Todo() {
    }

}
