import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezvousIdComponent } from './rendezvous-id.component';

describe('RendezvousIdComponent', () => {
  let component: RendezvousIdComponent;
  let fixture: ComponentFixture<RendezvousIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendezvousIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendezvousIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
