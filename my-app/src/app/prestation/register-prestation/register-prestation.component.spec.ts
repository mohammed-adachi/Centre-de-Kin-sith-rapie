import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPrestationComponent } from './register-prestation.component';

describe('RegisterPrestationComponent', () => {
  let component: RegisterPrestationComponent;
  let fixture: ComponentFixture<RegisterPrestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPrestationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
