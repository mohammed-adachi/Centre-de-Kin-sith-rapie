package com.kinesitherapie.kinesitherapie.models;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RendezVousPatientDTO {
    
    @NotNull(message = "Patient ID is required")
    @Min(value = 1, message = "Patient ID must be greater than 0")
    private Integer  patient_id;

    @NotNull(message = "Date is required")
    private LocalDate date;

    @NotNull(message = "Time is required")
    private LocalTime time;

    private String location;

    // Getters and setters

    public int getPatientId() {
        return patient_id;
    }

    public void setPatientId(int patientId) {
        this.patient_id = patientId;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

}
