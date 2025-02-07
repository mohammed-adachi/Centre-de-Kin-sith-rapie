import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpaiemenByIDComponent } from './viewpaiemen-by-id.component';

describe('ViewpaiemenByIDComponent', () => {
  let component: ViewpaiemenByIDComponent;
  let fixture: ComponentFixture<ViewpaiemenByIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewpaiemenByIDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpaiemenByIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
