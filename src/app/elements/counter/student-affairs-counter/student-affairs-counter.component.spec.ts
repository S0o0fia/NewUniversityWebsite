import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAffairsCounterComponent } from './student-affairs-counter.component';

describe('StudentAffairsCounterComponent', () => {
  let component: StudentAffairsCounterComponent;
  let fixture: ComponentFixture<StudentAffairsCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAffairsCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAffairsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
