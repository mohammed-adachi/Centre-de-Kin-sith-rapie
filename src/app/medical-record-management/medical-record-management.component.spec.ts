import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRecordManagementComponent } from './medical-record-management.component';

describe('MedicalRecordManagementComponent', () => {
  let component: MedicalRecordManagementComponent;
  let fixture: ComponentFixture<MedicalRecordManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicalRecordManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalRecordManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
