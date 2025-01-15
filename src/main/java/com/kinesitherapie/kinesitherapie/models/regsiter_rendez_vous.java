package com.kinesitherapie.kinesitherapie.models;

public class regsiter_rendez_vous {
    private String date;
    private String heure;
    private String id_patient;
    private String id_kine;

    public regsiter_rendez_vous(String date, String heure, String id_patient, String id_kine) {
        this.date = date;
        this.heure = heure;
        this.id_patient = id_patient;
        this.id_kine = id_kine;
    }

    public String getDate() {
        return date;
    }

    public String getHeure() {
        return heure;
    }

    public String getId_patient() {
        return id_patient;
    }

    public String getId_kine() {
        return id_kine;
    }

}
