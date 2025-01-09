package com.kinesitherapie.kinesitherapie.controller;
import java.util.*;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;




@RestController
public class homecontroller {
@GetMapping("/home")
public ResponseEntity<Map<String, String>> home() {
    Map<String, String> response = new HashMap<>();
    response.put("message", "home page");
    return ResponseEntity.ok(response); // Renvoie un objet JSON avec la clé "message"
}
@GetMapping("/store")
public String store() {
    return "store page";
}
@GetMapping("/admin/home")
public String adminhome() {
    return "admin home page";
}
@GetMapping("/client/home")
public String clienthome() {
    return "client home page";
}

}