package com.kinesitherapie.kinesitherapie.repostry;
import org.springframework.data.jpa.repository.JpaRepository;
import com.kinesitherapie.kinesitherapie.models.patient;

public interface patient_Repostry extends JpaRepository<patient, Integer> {
    public  patient findByname(String name);

}
