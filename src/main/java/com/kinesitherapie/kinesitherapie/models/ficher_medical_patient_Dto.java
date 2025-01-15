package com.kinesitherapie.kinesitherapie.models;

import jakarta.validation.constraints.NotNull;
import lombok.*;
@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ficher_medical_patient_Dto {
    @NotNull(message = "Patient ID is required")
    private Integer  patient_id;
    @NotNull(message = "Date is required")
    private String description;



}
