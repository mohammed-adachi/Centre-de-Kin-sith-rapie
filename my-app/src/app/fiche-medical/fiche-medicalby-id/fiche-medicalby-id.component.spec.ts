import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheMedicalbyIdComponent } from './fiche-medicalby-id.component';

describe('FicheMedicalbyIdComponent', () => {
  let component: FicheMedicalbyIdComponent;
  let fixture: ComponentFixture<FicheMedicalbyIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FicheMedicalbyIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheMedicalbyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
