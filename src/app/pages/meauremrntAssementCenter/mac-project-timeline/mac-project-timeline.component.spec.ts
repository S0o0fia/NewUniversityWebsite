import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacProjectTimelineComponent } from './mac-project-timeline.component';

describe('MacProjectTimelineComponent', () => {
  let component: MacProjectTimelineComponent;
  let fixture: ComponentFixture<MacProjectTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacProjectTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacProjectTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
