package com.movieApp.movieApp.controllers;

import com.movieApp.movieApp.exceptions.UserNotFoundException;
import com.movieApp.movieApp.models.User;
import com.movieApp.movieApp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;


@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(10);



    // DTO for request body
    public record LoginRequest(String username, String password) {}
    public record UserDto(Integer id, String username, String email) {}

    @PostMapping("/users")
    User newUser(@RequestBody User newUser) {
        newUser.setPassword(encoder.encode(newUser.getPassword()));
        return userRepository.save(newUser);
    }



    @PostMapping("/users/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {
        var userOpt = userRepository.findByUsername(req.username());
        if (userOpt.isEmpty()) return ResponseEntity.status(401).body("Invalid username or password");

        var user = userOpt.get();
        if (!encoder.matches(req.password(), user.getPassword()))
            return ResponseEntity.status(401).body("Invalid username or password");

        // Jackson happily serializes nulls in a DTO—no crash
        return ResponseEntity.ok(new UserDto(user.getId(), user.getUsername(), user.getEmail()));
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
