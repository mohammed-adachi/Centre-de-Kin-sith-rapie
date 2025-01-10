package com.kinesitherapie.kinesitherapie.repostry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kinesitherapie.kinesitherapie.models.user;

public interface userrepositry  extends JpaRepository<user, Integer> {
    public  user findByUsername(String username);
    public   user findByEmail(String email);
  }