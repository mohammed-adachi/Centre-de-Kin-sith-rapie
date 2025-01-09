package com.kinesitherapie.kinesitherapie.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "patient")
public class patient {
    @Id  // Ajout de l'annotation @Id pour marquer ce champ comme clé primaire
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private long id;
     @Column(unique = true)
    private String name;
    @Column(unique = true)
    private String prenom ;
    @Column(unique = true)
    private String telephone;
    @Column(unique = true)
    private String adress;
  // generer getters et setters
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getPrenom() {
        return prenom;
    }
    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }
    public String getTelephone() {
        return telephone;
    }
    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }
    public String getAdress() {
        return adress;
    }
    public void setAdress(String adress) {
        this.adress = adress;
    }
}
