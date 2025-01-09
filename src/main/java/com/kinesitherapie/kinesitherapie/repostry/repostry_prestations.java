package com.kinesitherapie.kinesitherapie.repostry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kinesitherapie.kinesitherapie.models.prestation;

public interface repostry_prestations extends JpaRepository<prestation, Integer> {
    public prestation findByDescritpion(String type);
    public prestation findByPatient(double tarif);

}
