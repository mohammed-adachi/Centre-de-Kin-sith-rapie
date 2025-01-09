package com.kinesitherapie.kinesitherapie.models;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Getter
@Setter
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class paiement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private double montant ;
    @Column(nullable = false)
    private String date;
    @ManyToOne
    @JoinColumn(name = "patient_id", nullable = false)
    private patient patient;

}
