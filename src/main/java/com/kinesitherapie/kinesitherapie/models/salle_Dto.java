package com.kinesitherapie.kinesitherapie.models;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
public class salle_Dto {
    private  String name;
    private int nombre_machines;
    private int nombre_lits;

}
