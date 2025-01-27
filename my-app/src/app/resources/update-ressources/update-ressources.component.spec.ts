import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRessourcesComponent } from './update-ressources.component';

describe('UpdateRessourcesComponent', () => {
  let component: UpdateRessourcesComponent;
  let fixture: ComponentFixture<UpdateRessourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateRessourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRessourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
