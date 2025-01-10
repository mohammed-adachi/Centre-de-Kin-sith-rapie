package com.kinesitherapie.kinesitherapie.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.kinesitherapie.kinesitherapie.models.user;
import com.kinesitherapie.kinesitherapie.repostry.userrepositry;


@Service
public class serviceUser implements UserDetailsService  {
    @Autowired
    private userrepositry userrepositry;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
      
     user user = userrepositry.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }

        return new org.springframework.security.core.userdetails.User(
            user.getUsername(),
            user.getPassword(),  // Assurez-vous que c'est le mot de passe encodé
            new ArrayList<>()
        );  
      
    }

}
