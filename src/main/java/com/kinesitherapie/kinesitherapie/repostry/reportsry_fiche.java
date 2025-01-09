package com.kinesitherapie.kinesitherapie.repostry;

import com.kinesitherapie.kinesitherapie.models.FicheMedicale;
import com.kinesitherapie.kinesitherapie.models.patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface reportsry_fiche extends JpaRepository<FicheMedicale, Integer> {

    @Query("""
        SELECT FicheMedicale
        FROM FicheMedicale  
        WHERE FicheMedicale.patient.id = :id
""")
public FicheMedicale findByDescritpion(String Descritpion);
public FicheMedicale findByPatient(patient patient);


}
