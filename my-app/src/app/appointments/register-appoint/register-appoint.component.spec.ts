import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAppointComponent } from './register-appoint.component';

describe('RegisterAppointComponent', () => {
  let component: RegisterAppointComponent;
  let fixture: ComponentFixture<RegisterAppointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterAppointComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAppointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
