package com.kinesitherapie.kinesitherapie.models;

import java.time.LocalDate;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import lombok.experimental.SuperBuilder;


@Getter
@Setter
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
public class register_patien {
    @NotNull(message = "Name is required")
    private String name;
    @NotNull(message = "telehone is required")
    private String telephone;
    @NotNull(message = "adress is required")
    private String adress;
     private LocalDate dateOfBirth;

   

}
