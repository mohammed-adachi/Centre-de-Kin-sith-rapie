package com.kinesitherapie.kinesitherapie.models;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.*;
import jakarta.persistence.Entity;
import lombok.experimental.SuperBuilder;
import jakarta.persistence.*;

@Getter
@Setter
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class FicheMedicale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String Descritpion;
    @ManyToOne
    @JoinColumn(name = "patient_id", nullable = false)
    private patient patient; 

}
