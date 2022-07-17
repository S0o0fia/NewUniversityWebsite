import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacProjectPlanComponent } from './mac-project-plan.component';

describe('MacProjectPlanComponent', () => {
  let component: MacProjectPlanComponent;
  let fixture: ComponentFixture<MacProjectPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacProjectPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacProjectPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
