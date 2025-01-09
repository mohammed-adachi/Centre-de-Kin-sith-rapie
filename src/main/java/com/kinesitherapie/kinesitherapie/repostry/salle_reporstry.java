package com.kinesitherapie.kinesitherapie.repostry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kinesitherapie.kinesitherapie.models.salle;

public interface salle_reporstry extends JpaRepository<salle, Integer> {
    public salle findByNom(String nom);
    public salle findByCapacite(int nombre_machines);


}
