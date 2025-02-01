package com.kinesitherapie.kinesitherapie.controller;

import java.time.Instant;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.method.P;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwsHeader;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.kinesitherapie.kinesitherapie.models.user;
import com.kinesitherapie.kinesitherapie.models.registerDLO;
import com.kinesitherapie.kinesitherapie.models.register_patien;
import com.kinesitherapie.kinesitherapie.models.register_prestation_DTO;
import com.kinesitherapie.kinesitherapie.models.rendez_vous;
import com.kinesitherapie.kinesitherapie.models.salle;
import com.kinesitherapie.kinesitherapie.models.salle_Dto;
import com.kinesitherapie.kinesitherapie.repostry.*;
import com.kinesitherapie.kinesitherapie.models.FicheMedicale;
import com.kinesitherapie.kinesitherapie.models.RendezVousPatientDTO;
import com.kinesitherapie.kinesitherapie.models.ficher_medical_patient_Dto;
import com.kinesitherapie.kinesitherapie.models.loginDLO;
import com.kinesitherapie.kinesitherapie.models.paiement;
import com.kinesitherapie.kinesitherapie.models.patient;
import com.kinesitherapie.kinesitherapie.models.patient_DTO;
import com.kinesitherapie.kinesitherapie.models.prestation;
import com.nimbusds.jose.jwk.source.ImmutableSecret;

import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/acount")
public class acountControler {
  @Value("${security.jwt.secret-key}")
  private String secretKey;
  @Value("${security.jwt.issuer}")
    private String issuer;
 @Autowired
 private userrepositry userrepositry;

@Autowired
private patient_Repostry patient_Repostry;
@Autowired
private reportsry_fiche reportsry_fiche;

@Autowired
private AuthenticationManager authenticationManager;
@Autowired
private rendez_reporstry rendez_reporstry;
@Autowired
private repostry_prestations repostry_prestations;
@Autowired
private salle_reporstry salle_Repostry;
@Autowired
private repostry_paiement repostry_paiement;

  @PostMapping("/register")
  public ResponseEntity<Object> register(@ Valid @RequestBody registerDLO registerDLO ,BindingResult result){


    if(result.hasErrors()){
      var  errorlist= result.getAllErrors();
      var errorMap= new HashMap<String,String>();
      for(var error:errorlist){
        errorMap.put(error.getObjectName(),error.getDefaultMessage());
      }
      return ResponseEntity.badRequest().body(errorMap);
    }

   var bCryptPassword= new BCryptPasswordEncoder();
    var user= new user();

    user.setUsername(registerDLO.getUsername());
    user.setFirstname(registerDLO.getFirstname());
    user.setPassword(bCryptPassword.encode(registerDLO.getPassword()));
    user.setEmail(registerDLO.getEmail());
    user.setRole(registerDLO.getRole());

    try {
      var otheruser= userrepositry.findByUsername(registerDLO.getUsername());
      if(otheruser != null){
        return ResponseEntity.badRequest().body("user already exist");
      }

      var otheruseremail= userrepositry.findByEmail(registerDLO.getEmail());
      if(otheruseremail != null){
        return ResponseEntity.badRequest().body("email already exist");
      }
      userrepositry.save(user);

      var response= new HashMap<String,Object>();
      response.put("user",user);
      response.put("token",createJwtToken(user));
      return ResponseEntity.ok(response);

    } catch (Exception e) {
      System.out.println("is ana exception");
      e.printStackTrace();
    }
    return ResponseEntity.badRequest().body("error");
  }

  @PostMapping("/login")
  public ResponseEntity<Object> login(@Valid @RequestBody loginDLO loginDLO ,BindingResult result){


    if(result.hasErrors()){
      var  errorlist= result.getAllErrors();
      var errorMap= new HashMap<String,String>();
      for(var error:errorlist){
        errorMap.put(error.getObjectName(),error.getDefaultMessage());
      }
      return ResponseEntity.badRequest().body(errorMap);
    }
    try {
      authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(loginDLO.getUsername(),loginDLO.getPassword())

      );
    user  user= userrepositry.findByUsername(loginDLO.getUsername());
      var response= new HashMap<String,Object>();
      response.put("user",user);
      response.put("token",createJwtToken(user));
      response.put("roles", user.getRole());
      return ResponseEntity.ok(response);


    }   catch (BadCredentialsException ex) {
        // Si les identifiants sont incorrects
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");

    } catch (LockedException ex) {
        // Si le compte est verrouillé
        return ResponseEntity.status(HttpStatus.LOCKED).body("Account is locked");

    } catch (DisabledException ex) {
        // Si le compte est désactivé
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Account is disabled");

    } catch (AuthenticationException ex) {
        // Pour toute autre erreur d'authentification
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed");
    }

  }



    private String createJwtToken(user user){
    Instant now = Instant.now();
    JwtClaimsSet claims = JwtClaimsSet.builder()
    .subject(user.getUsername())
    .issuer(issuer)
    .issuedAt(now)
    .claim("role", user.getRole())
    .subject(user.getUsername())
    .expiresAt(now.plusSeconds(60))
    .build();
    var encoder= new NimbusJwtEncoder(new ImmutableSecret<>(secretKey.getBytes()));
    var parms= JwtEncoderParameters.from(JwsHeader.with(MacAlgorithm.HS256).build(),claims);
     return encoder.encode(parms).getTokenValue();
    }




@PostMapping("/register-patient")
public ResponseEntity<?> createPatient(@Valid @RequestBody patient patient) {
    if (patient.getName() == null || patient.getName().isEmpty()) {
        return ResponseEntity.badRequest().body("Error: Name cannot be empty.");
    }

    try {
        patient savedPatient = patient_Repostry.save(patient);
        return ResponseEntity.ok(savedPatient);
    } catch (Exception e) {
        return ResponseEntity.badRequest().body("Error creating patient: " + e.getMessage());
    }
}
@PostMapping("/create_rendezvous")
public ResponseEntity<?> createRendezVousPatient(@Valid @RequestBody RendezVousPatientDTO dto, @AuthenticationPrincipal UserDetails userDetails) {
    try {
        System.out.println("Fetching patient with ID: " + dto.getPatientId());

         patient patient = patient_Repostry.findById(dto.getPatientId())
             .orElseThrow(() -> new RuntimeException("Patient with ID " + dto.getPatientId() + " not found"));

        rendez_vous rendezvous = new rendez_vous();
        rendezvous.setDate(dto.getDate());
        rendezvous.setTime(dto.getTime());
        rendezvous.setLocation(dto.getLocation());
        rendezvous.setPatient(patient);

        rendez_vous savedRendezvous = rendez_reporstry.save(rendezvous);
        return ResponseEntity.ok(savedRendezvous);
    } catch (Exception e) {
        e.printStackTrace(); // Log the stack trace
        return ResponseEntity.badRequest().body("Error creating rendez-vous: " + e.getMessage());
    }
}
@GetMapping("/rendezvous")
public List<rendez_vous> getRendezVous() {
    List<rendez_vous> result = rendez_reporstry.findAll();
    System.out.println("Rendez-vous fetched: " + result.size());
    return result;
}
@PutMapping("/update_rendez_vous/{id}")
public ResponseEntity<?> updateRendezVous(@PathVariable Integer id, @Valid @RequestBody RendezVousPatientDTO dto) {
    try {
        // Recherche du rendez-vous
        rendez_vous rendezvous = rendez_reporstry.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Rendez-vous with ID " + id + " not found"));

        // Recherche du patient
        patient patient = patient_Repostry.findById(dto.getPatientId())
            .orElseThrow(() -> new EntityNotFoundException("Patient with ID " + dto.getPatientId() + " not found"));

        // Mise à jour des informations
        rendezvous.setDate(dto.getDate());
        rendezvous.setTime(dto.getTime());
        rendezvous.setLocation(dto.getLocation());
        rendezvous.setPatient(patient);

        // Sauvegarde des modifications
        rendez_vous savedRendezvous = rendez_reporstry.save(rendezvous);

        return ResponseEntity.ok(savedRendezvous);
    } catch (EntityNotFoundException e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    } catch (Exception e) {
        e.printStackTrace(); // Log du problème
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating rendez-vous: " + e.getMessage());
    }
}

@DeleteMapping("/delete_rendez_vous/{id}")
public ResponseEntity<?> deleteRendezVous(@PathVariable Integer id) {
    try {
        // Recherche du rendez-vous
        rendez_vous rendezvous = rendez_reporstry.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Rendez-vous with ID " + id + " not found"));

        // Suppression du rendez-vous
        rendez_reporstry.delete(rendezvous);

        return ResponseEntity.ok("Rendez-vous deleted");
    } catch (EntityNotFoundException e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    } catch (Exception e) {
        e.printStackTrace(); // Log du problème
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting rendez-vous: " + e.getMessage());
    }
}

@PostMapping("/create_ficher_medical")
@PreAuthorize("hasAuthority('DOCTOR')")
public ResponseEntity<?> createFicherMedical(@Valid @RequestBody ficher_medical_patient_Dto ficher_medical_patient_Dto) {
    try {
        // Recherche du patient
        patient patient = patient_Repostry.findById(ficher_medical_patient_Dto.getPatient_id())
            .orElseThrow(() -> new EntityNotFoundException("Patient with ID " + ficher_medical_patient_Dto.getPatient_id() + " not found"));

        // Création du fichier médical
        FicheMedicale ficherMedical = new FicheMedicale();
        ficherMedical.setDescription(ficher_medical_patient_Dto.getDescription());
        ficherMedical.setPatient(patient);

        // Sauvegarde du fichier médical
        FicheMedicale savedFicherMedical = reportsry_fiche.save(ficherMedical);

        return ResponseEntity.ok(savedFicherMedical);
    } catch (EntityNotFoundException e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    } catch (Exception e) {
        e.printStackTrace(); // Log du problème
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating ficher medical: " + e.getMessage());
    }
}
@GetMapping("/fiche")
@PreAuthorize("hasAuthority('DOCTOR')")
public String getFiche() {
    return "acces coorecte";
}



@GetMapping("/ficher_medical")
@PreAuthorize("hasAuthority('DOCTOR')")
public List<FicheMedicale> getFicherMedical() {
    List<FicheMedicale> result = reportsry_fiche.findAll();
    System.out.println("Ficher medical fetched: " + result.size());
    return result;
}
@PutMapping("/update_ficher_medical/{id}")
@PreAuthorize("hasAuthority('DOCTOR')")
public ResponseEntity<?> updateFicherMedical(@PathVariable Integer id, @Valid @RequestBody ficher_medical_patient_Dto ficher_medical_patient_Dto) {
    try {
        // Recherche du fichier médical
        FicheMedicale ficherMedical = reportsry_fiche.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Ficher medical with ID " + id + " not found"));

        // Recherche du patient
        patient patient = patient_Repostry.findById(ficher_medical_patient_Dto.getPatient_id())
            .orElseThrow(() -> new EntityNotFoundException("Patient with ID " + ficher_medical_patient_Dto.getPatient_id() + " not found"));

        // Mise à jour des informations
        ficherMedical.setDescription(ficher_medical_patient_Dto.getDescription());
        ficherMedical.setPatient(patient);

        // Sauvegarde des modifications
        FicheMedicale savedFicherMedical = reportsry_fiche.save(ficherMedical);

        return ResponseEntity.ok(savedFicherMedical);
    } catch (EntityNotFoundException e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    } catch (Exception e) {
        e.printStackTrace(); // Log du problème
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating ficher medical: " + e.getMessage());
    }
}
@DeleteMapping("/delete_ficher_medical/{id}")
@PreAuthorize("hasAuthority('DOCTOR')")
public ResponseEntity<?> deleteFicherMedical(@PathVariable Integer id) {
    try {
        // Recherche du fichier médical
        FicheMedicale ficherMedical = reportsry_fiche.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Ficher medical with ID " + id + " not found"));

        // Suppression du fichier médical
        reportsry_fiche.delete(ficherMedical);

        return ResponseEntity.ok("Ficher medical deleted");
    } catch (EntityNotFoundException e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    } catch (Exception e) {
        e.printStackTrace(); // Log du problème
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting ficher medical: " + e.getMessage());
    }
}
@PostMapping("/register_patient")
public ResponseEntity<Object> registerPatient(
        @Valid @RequestBody register_patien registerPatientDTO,
        BindingResult result) {
    // Vérification des erreurs de validation
    if (result.hasErrors()) {
        var errorMap = result.getFieldErrors().stream()
                .collect(Collectors.toMap(FieldError::getField, FieldError::getDefaultMessage));
        return ResponseEntity.badRequest().body(errorMap);
    }

    // Création du patient
    patient patient = new patient();
    patient.setName(registerPatientDTO.getName());
    patient.setDateOfBirth(registerPatientDTO.getDateOfBirth());
    patient.setTelephone(registerPatientDTO.getTelephone());
    patient.setAdress(registerPatientDTO.getAdress());

    // Sauvegarde dans la base de données
    patient_Repostry.save(patient);

    return ResponseEntity.ok(patient);
}

@GetMapping("/patient")
public List<patient> getPatients() {
    return patient_Repostry.findAll();
}
@PutMapping("/update_patient/{id}")
public ResponseEntity<Object> updatePatient(
        @PathVariable Integer id,
        @Valid @RequestBody register_patien registerPatientDTO,
        BindingResult result) {
    // Vérification des erreurs de validation
    if (result.hasErrors()) {
        var errorMap = result.getFieldErrors().stream()
                .collect(Collectors.toMap(FieldError::getField, FieldError::getDefaultMessage));
        return ResponseEntity.badRequest().body(errorMap);
    }

    // Vérification si le patient existe
    Optional<patient> existingPatient = patient_Repostry.findById(id);
    if (existingPatient.isEmpty()) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Patient not found");
    }

    // Mise à jour des informations
    patient patient = existingPatient.get();
    patient.setName(registerPatientDTO.getName());
    patient.setDateOfBirth(registerPatientDTO.getDateOfBirth());
    patient.setTelephone(registerPatientDTO.getTelephone());
    patient.setAdress(registerPatientDTO.getAdress());

    // Sauvegarde dans la base de données
    patient_Repostry.save(patient);

    return ResponseEntity.ok(patient);
}
@DeleteMapping("/delete_patient/{id}")
public ResponseEntity<Object> deletePatient(@PathVariable Integer id) {
    // Vérification si le patient existe
    Optional<patient> existingPatient = patient_Repostry.findById(id);
    if (existingPatient.isEmpty()) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Patient not found");
    }

    // Suppression du patient
    patient_Repostry.delete(existingPatient.get());

    return ResponseEntity.ok("Patient deleted");
}

@PostMapping("/register_presation")
public ResponseEntity<Object> registerPrestation(@Valid @RequestBody register_prestation_DTO register_prestation_DTO,
        BindingResult result) {
    // Vérification des erreurs de validation
    if (result.hasErrors()) {
        var errorMap = result.getFieldErrors().stream()
                .collect(Collectors.toMap(FieldError::getField, FieldError::getDefaultMessage));
        return ResponseEntity.badRequest().body(errorMap);
    }

    // Création de la prestation
    prestation prestation = new prestation();
    prestation.setName(register_prestation_DTO.getName());
    prestation.setType(register_prestation_DTO.getType());
    prestation.setTarif(register_prestation_DTO.getTarif());

    // Sauvegarde dans la base de données
    repostry_prestations.save(prestation);

    return ResponseEntity.ok(prestation);
}
@GetMapping("/prestations")
public List<prestation> getPrestations() {
    return repostry_prestations.findAll();
}
@PutMapping("/update_prestation/{id}")
public ResponseEntity<Object> updatePrestation(
        @PathVariable Integer id,
        @Valid @RequestBody register_prestation_DTO registerPrestationDTO,
        BindingResult result) {
    // Vérification des erreurs de validation
    if (result.hasErrors()) {
        var errorMap = result.getFieldErrors().stream()
                .collect(Collectors.toMap(FieldError::getField, FieldError::getDefaultMessage));
        return ResponseEntity.badRequest().body(errorMap);
    }

    // Vérification si la prestation existe
    Optional<prestation> existingPrestation = repostry_prestations.findById(id);
    if
    (existingPrestation.isEmpty()) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Prestation not found");
    }

    // Mise à jour des informations
    prestation prestation = existingPrestation.get();
    prestation.setName(registerPrestationDTO.getName());
    prestation.setType(registerPrestationDTO.getType());
    prestation.setTarif(registerPrestationDTO.getTarif());
    repostry_prestations.save(prestation);
    return ResponseEntity.ok(prestation);
       }
@DeleteMapping("/delete_presation/{id}")
public ResponseEntity<Object> deletePrestation(@PathVariable Integer id) {
    // Vérification si la prestation existe
    Optional<prestation> existingPrestation = repostry_prestations.findById(id);
    if
    (existingPrestation.isEmpty()) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Prestation not found");
    }
    // Suppression de la prestation
    repostry_prestations.delete(existingPrestation.get());
    return ResponseEntity.ok("Prestation deleted");

}
@PostMapping("/register_salle")
public ResponseEntity<Object> registerSalle(@Valid @RequestBody salle_Dto salleDto, BindingResult result) {
    // Vérification des erreurs de validation
    if (result.hasErrors()) {
        var errorMap = result.getFieldErrors().stream()
                .collect(Collectors.toMap(FieldError::getField, FieldError::getDefaultMessage));
        return ResponseEntity.badRequest().body(errorMap);
    }

    // Création de la salle
    salle salle = new salle();
    salle.setName(salleDto.getName());
    salle.setnombre_machines(salleDto.getNombre_machines());
    salle.setnombre_lits(salleDto.getNombre_lits());

    // Sauvegarde dans la base de données
    salle_Repostry.save(salle);

    return ResponseEntity.ok(salle);

}

@GetMapping("/salles")
public List<salle> getSalles() {
    return salle_Repostry.findAll();}
@PutMapping("/update_salle/{id}")
public ResponseEntity<Object> updateSalle(
        @PathVariable Integer id,
        @Valid @RequestBody salle_Dto salleDto,
        BindingResult result) {
    // Vérification des erreurs de validation
    if (result.hasErrors()) {
        var errorMap = result.getFieldErrors().stream()
                .collect(Collectors.toMap(FieldError::getField, FieldError::getDefaultMessage));
        return ResponseEntity.badRequest().body(errorMap);
    }

    // Vérification si la salle existe
    Optional<salle> existingSalle = salle_Repostry.findById(id);
    if (existingSalle.isEmpty()) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Salle not found");
    }
    // Mise à jour des informations
    salle salle = existingSalle.get();
    salle.setName(salleDto.getName());
    salle.setnombre_machines(salleDto.getNombre_machines());
    salle.setnombre_lits(salleDto.getNombre_lits());
    // Sauvegarde dans la base de données
    salle_Repostry.save(salle);
    return ResponseEntity.ok(salle);}
@DeleteMapping("/delete_salle/{id}")
public ResponseEntity<Object> deleteSalle(@PathVariable Integer id) {
    // Vérification si la salle existe
    Optional<salle> existingSalle = salle_Repostry.findById(id);
    if (existingSalle.isEmpty()) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Salle not found");
    }
    // Suppression de la salle
    salle_Repostry.delete(existingSalle.get());
    return ResponseEntity.ok("Salle deleted");
}
@PostMapping("/register_paiement")
public ResponseEntity<Object> registerPaiement(@Valid @RequestBody patient_DTO paiementDTO,
        BindingResult result) {
            try {
                System.out.println("Fetching patient with ID: " + paiementDTO.getPatient_id());

                 patient patient = patient_Repostry.findById(paiementDTO.getPatient_id())
                     .orElseThrow(() -> new RuntimeException("Patient with ID " + paiementDTO.getPatient_id() + " not found"));

    // Création de la prestation
    paiement paiement = new paiement ();
    paiement.setDate(paiementDTO.getDate());
    paiement.setMontant(paiementDTO.getMontant());
    paiement.setPatient(patient);

    // Sauvegarde dans la base de données
    repostry_paiement.save(paiement);

    return ResponseEntity.ok(paiement);
} catch (Exception e) {
    e.printStackTrace(); // Log the stack trace
    return ResponseEntity.badRequest().body("Error creating paiement: " + e.getMessage());
}


}
@GetMapping("/paiements")
public List<paiement> getPaiements() {
    return repostry_paiement.findAll();
}
@PutMapping("/update_paiement/{id}")
public ResponseEntity<Object> updatePaiement(
        @PathVariable Integer id,
        @Valid @RequestBody patient_DTO paiementDTO,
        BindingResult result) {
    // Vérification des erreurs de validation
    if (result.hasErrors()) {
        var errorMap = result.getFieldErrors().stream()
                .collect(Collectors.toMap(FieldError::getField, FieldError::getDefaultMessage));
        return ResponseEntity.badRequest().body(errorMap);
    }

    // Vérification si le paiement existe
    Optional<paiement> existingPaiement = repostry_paiement.findById(id);
    if (existingPaiement.isEmpty()) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Paiement not found");
    }

    // Mise à jour des informations
    paiement paiement = existingPaiement.get();
    paiement.setDate(paiementDTO.getDate());
    paiement.setMontant(paiementDTO.getMontant());
    // Sauvegarde dans la base de données
    repostry_paiement.save(paiement);
    return ResponseEntity.ok(paiement);
        }
@DeleteMapping("/delete_paiement/{id}")
public ResponseEntity<Object> deletePaiement(@PathVariable Integer id) {
    // Vérification si le paiement existe
    Optional<paiement> existingPaiement = repostry_paiement.findById(id);
    if (existingPaiement.isEmpty()) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Paiement not found");
    }
    // Suppression du paiement
    repostry_paiement.delete(existingPaiement.get());
    return ResponseEntity.ok("Paiement deleted");
}

}
