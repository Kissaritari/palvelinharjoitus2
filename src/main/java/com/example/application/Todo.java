package com.example.application;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;

import java.sql.Time;
import java.util.Date;

@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Todo {
    @Id
    @GeneratedValue
    private Long id;
    private String task;
    private boolean done;
    private String title;

    public Todo(String task, String title) {
    }
}