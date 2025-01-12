package com.kinesitherapie.kinesitherapie.models;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public class register_patien {
    @NotNull(message = "Name is required")
    private String name;
    @NotNull(message = "prenom is required")
    private String prenom;
    @NotNull(message = "telehone is required")
    private String telephone;
    @NotNull(message = "adress is required")
    private String adress;

    //generer getters et setters
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
