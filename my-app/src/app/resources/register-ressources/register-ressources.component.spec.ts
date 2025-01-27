import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRessourcesComponent } from './register-ressources.component';

describe('RegisterRessourcesComponent', () => {
  let component: RegisterRessourcesComponent;
  let fixture: ComponentFixture<RegisterRessourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterRessourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterRessourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
