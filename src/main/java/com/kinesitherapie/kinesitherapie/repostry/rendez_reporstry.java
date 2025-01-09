package com.kinesitherapie.kinesitherapie.models;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface rendez_reporstry extends JpaRepository<rendez_vous, Integer> {

      @Query("""
            SELECT rendez_vous
            FROM rendez_vous  
            WHERE rendez_vous.patient.id = :id
""")
    public rendez_vous findByDate(String Date);
    public rendez_vous findByHeure(String heure);
    public rendez_vous findByStatut(String statut);
    public rendez_vous findByPatient(patient patient);

}
