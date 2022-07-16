import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacSliderComponent } from './mac-slider.component';

describe('MacSliderComponent', () => {
  let component: MacSliderComponent;
  let fixture: ComponentFixture<MacSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
