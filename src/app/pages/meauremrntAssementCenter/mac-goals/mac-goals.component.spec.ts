import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacGoalsComponent } from './mac-goals.component';

describe('MacGoalsComponent', () => {
  let component: MacGoalsComponent;
  let fixture: ComponentFixture<MacGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacGoalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
