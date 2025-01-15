package com.kinesitherapie.kinesitherapie.models;

import lombok.*;
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
    private Integer id;
    @Column(nullable = false)
    private String Description;
    @ManyToOne
    @JoinColumn(name = "patient_id", nullable = false)
    private patient patient; 

}
