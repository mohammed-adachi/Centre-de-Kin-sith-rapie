package com.kinesitherapie.kinesitherapie.models;

import com.kinesitherapie.kinesitherapie.common.BaseEntity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;


@Getter
@Setter
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class rendez_vous {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String date ;
    @Column(nullable = false)
    private String heure;
    @Column(nullable = false)
    private String statut;
    @ManyToOne
    @JoinColumn(name = "patient_id", nullable = false)
    private patient patient;  

}
