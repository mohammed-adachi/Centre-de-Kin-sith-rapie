package com.kinesitherapie.kinesitherapie.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "salle")
public class salle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(unique = true)
    private String name;
    @Column(unique = true)
    private int nombre_machines ;
    @Column(unique = true)
    private int nombre_lits;
    //genrer getters and setters
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getnombre_machines () {
        return nombre_machines ;
    }
    public void setnombre_lits(int nombre_machines ) {
        this.nombre_machines  = nombre_machines ;
    }
    public int getnombre_lits () {
        return nombre_lits ;
    }
    public void setType(int nombre_lits ) {
        this.nombre_lits  = nombre_lits ;
    }

}
