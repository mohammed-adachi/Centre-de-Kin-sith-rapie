package com.kinesitherapie.kinesitherapie.repostry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kinesitherapie.kinesitherapie.models.patient;


@Repository
public interface patient_Repostry extends JpaRepository<patient, Integer> {
}
