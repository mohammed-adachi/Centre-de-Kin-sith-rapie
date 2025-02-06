import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFicheMedicalbyIdComponent } from './update-fiche-medicalby-id.component';

describe('UpdateFicheMedicalbyIdComponent', () => {
  let component: UpdateFicheMedicalbyIdComponent;
  let fixture: ComponentFixture<UpdateFicheMedicalbyIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateFicheMedicalbyIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFicheMedicalbyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
