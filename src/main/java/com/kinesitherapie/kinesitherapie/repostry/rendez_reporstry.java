package com.kinesitherapie.kinesitherapie.repostry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.kinesitherapie.kinesitherapie.models.patient;
import com.kinesitherapie.kinesitherapie.models.rendez_vous;


public interface rendez_reporstry extends JpaRepository<rendez_vous, Integer> {


 

}
