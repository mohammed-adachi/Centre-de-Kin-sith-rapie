package com.kinesitherapie.kinesitherapie.models;

import jakarta.validation.constraints.NotEmpty;

public class regsiter_patient {
@NotEmpty
private String name;
@NotEmpty
private String prenom;
private String telephone;
private String adress;
public String getName() {
    return name;
}
public void setName(String name) {
    this.name = name;
}
public String getPrenom() {
    return prenom;}
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
