package com.example.application;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;

import java.sql.Time;
import java.util.Date;

@Getter
@Entity
@NoArgsConstructor
@RequiredArgsConstructor
public class Todo {
    @Id
    @GeneratedValue
    private Long id;
    @NonNull
    private String task;
    @NonNull
    private  String title;
    private Date date;

    private boolean done;

    public Todo(String task, String title, Date date) {
        this.task = task;
        this.title = title;
        this.date = date;
    }
}