import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacProjectGoalsComponent } from './mac-project-goals.component';

describe('MacProjectGoalsComponent', () => {
  let component: MacProjectGoalsComponent;
  let fixture: ComponentFixture<MacProjectGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacProjectGoalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacProjectGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
