import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFicheMedicalComponent } from './register-fiche-medical.component';

describe('RegisterFicheMedicalComponent', () => {
  let component: RegisterFicheMedicalComponent;
  let fixture: ComponentFixture<RegisterFicheMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFicheMedicalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFicheMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
