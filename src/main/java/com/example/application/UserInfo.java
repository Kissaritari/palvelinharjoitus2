package com.example.application;

import lombok.Getter;
import lombok.NonNull;

import java.util.Collection;

@Getter
public class UserInfo {

    @NonNull
    private String name;
    @NonNull
    private Collection<String> authorities;

    public UserInfo(String name, Collection<String> authorities) {
        this.name = name;
        this.authorities = authorities;
    }
}
