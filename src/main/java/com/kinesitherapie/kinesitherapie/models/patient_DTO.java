package com.kinesitherapie.kinesitherapie.models;

import java.time.LocalDate;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
public class patient_DTO {
    private Integer patient_id;
    private Double montant;
    private LocalDate date;


}
