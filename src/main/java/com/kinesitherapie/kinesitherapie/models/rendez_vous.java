package com.kinesitherapie.kinesitherapie.models;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Set;

import com.kinesitherapie.kinesitherapie.common.BaseEntity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.*;


@Getter
@Setter
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "rendezvous")
public class rendez_vous {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private LocalDate date;

    @Column(nullable = false)
    private LocalTime time;

    private String location;
    
    @ManyToOne
    @JoinColumn(name = "patient_id", nullable = false)
    private patient patient;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "patientrendezvous",
        joinColumns = @JoinColumn(name = "rendezvous_id"),
        inverseJoinColumns = @JoinColumn(name = "patient_id")
    )
    private Set<patient> patients;

   
}