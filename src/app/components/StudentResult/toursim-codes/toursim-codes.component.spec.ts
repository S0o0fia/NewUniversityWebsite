import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursimCodesComponent } from './toursim-codes.component';

describe('ToursimCodesComponent', () => {
  let component: ToursimCodesComponent;
  let fixture: ComponentFixture<ToursimCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToursimCodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursimCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
