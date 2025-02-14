import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilrComponentComponent } from './profilr-component.component';

describe('ProfilrComponentComponent', () => {
  let component: ProfilrComponentComponent;
  let fixture: ComponentFixture<ProfilrComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilrComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilrComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
