package com.kinesitherapie.kinesitherapie.models;
import lombok.*;    
import lombok.experimental.SuperBuilder;


@Getter
@Setter
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
public class register_prestation_DTO {
    private String name;
    private String type;
    private double tarif; 

}
