package com.kinesitherapie.kinesitherapie.models;
import lombok.Getter;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class salle_Dto {
    private  String name;
    private int nombre_machines;
    private int nombre_lits;

}
