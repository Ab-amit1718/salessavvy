package com.salessavvy.backend.controller;

import com.salessavvy.backend.entity.User;
import com.salessavvy.backend.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // Test API
    @GetMapping("/test")
    public String test() {
        return "User service running";
    }

    // Fetch all users
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
}
