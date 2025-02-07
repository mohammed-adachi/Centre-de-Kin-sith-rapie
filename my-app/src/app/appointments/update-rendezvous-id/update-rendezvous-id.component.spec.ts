import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRendezvousIdComponent } from './update-rendezvous-id.component';

describe('UpdateRendezvousIdComponent', () => {
  let component: UpdateRendezvousIdComponent;
  let fixture: ComponentFixture<UpdateRendezvousIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateRendezvousIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRendezvousIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
