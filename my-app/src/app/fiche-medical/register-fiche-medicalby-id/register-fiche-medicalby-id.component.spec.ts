import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFicheMedicalbyIdComponent } from './register-fiche-medicalby-id.component';

describe('RegisterFicheMedicalbyIdComponent', () => {
  let component: RegisterFicheMedicalbyIdComponent;
  let fixture: ComponentFixture<RegisterFicheMedicalbyIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFicheMedicalbyIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFicheMedicalbyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
