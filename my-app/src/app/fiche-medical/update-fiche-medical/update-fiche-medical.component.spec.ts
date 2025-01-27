import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFicheMedicalComponent } from './update-fiche-medical.component';

describe('UpdateFicheMedicalComponent', () => {
  let component: UpdateFicheMedicalComponent;
  let fixture: ComponentFixture<UpdateFicheMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateFicheMedicalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFicheMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
