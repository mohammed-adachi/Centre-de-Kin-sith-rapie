import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterpaiemenByIDComponent } from './registerpaiemen-by-id.component';

describe('RegisterpaiemenByIDComponent', () => {
  let component: RegisterpaiemenByIDComponent;
  let fixture: ComponentFixture<RegisterpaiemenByIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterpaiemenByIDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterpaiemenByIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
