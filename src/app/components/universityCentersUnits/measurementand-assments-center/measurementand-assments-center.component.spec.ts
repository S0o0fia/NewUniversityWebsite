import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementandAssmentsCenterComponent } from './measurementand-assments-center.component';

describe('MeasurementandAssmentsCenterComponent', () => {
  let component: MeasurementandAssmentsCenterComponent;
  let fixture: ComponentFixture<MeasurementandAssmentsCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasurementandAssmentsCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementandAssmentsCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
