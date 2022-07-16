import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacCounterComponent } from './mac-counter.component';

describe('MacCounterComponent', () => {
  let component: MacCounterComponent;
  let fixture: ComponentFixture<MacCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
