package com.movieApp.movieApp.controllers;

import com.movieApp.movieApp.exceptions.UserNotFoundException;
import com.movieApp.movieApp.models.User;
import com.movieApp.movieApp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;



@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    //private BCryptPasswordEncoder

    @PostMapping("/users")
    User newUser(@RequestBody User newUser) {
        //newUser.setPassword();
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }
    @GetMapping("/users/{id}")
    User getUser(@PathVariable Integer id) { //path variable to get format users/1,
        // requesParam is for /users/?id=1
        return  userRepository.findById(id)
                .orElseThrow(()-> new UserNotFoundException(id));
    }
}
