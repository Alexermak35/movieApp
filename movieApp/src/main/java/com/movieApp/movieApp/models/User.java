package com.movieApp.movieApp.models;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Table(name ="USERS")
@Entity
public class User {
    @Id
    @GeneratedValue
    private int id;

    private String email;

    private String username;

    private String password;

    public User() {}

}
