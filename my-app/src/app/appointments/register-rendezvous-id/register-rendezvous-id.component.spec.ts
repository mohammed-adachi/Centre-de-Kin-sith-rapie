import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRendezvousIdComponent } from './register-rendezvous-id.component';

describe('RegisterRendezvousIdComponent', () => {
  let component: RegisterRendezvousIdComponent;
  let fixture: ComponentFixture<RegisterRendezvousIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterRendezvousIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterRendezvousIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
