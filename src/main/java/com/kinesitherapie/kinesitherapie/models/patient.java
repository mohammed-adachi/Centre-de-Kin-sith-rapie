package com.kinesitherapie.kinesitherapie.models;

import java.time.LocalDate;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "patient")
public class patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(nullable = false)
    private String name;
    @Column(name="telephone")
    private String telephone;
    @Column(name="adress")
    private String adress;
    @Column(name = "dateOfBirth")
    private LocalDate dateOfBirth;
    
    @ManyToMany(mappedBy = "patients")
    private Set<rendez_vous> rendezvous;

    // Getters and setters
}