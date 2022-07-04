import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsAffairGoalsComponent } from './students-affair-goals.component';

describe('StudentsAffairGoalsComponent', () => {
  let component: StudentsAffairGoalsComponent;
  let fixture: ComponentFixture<StudentsAffairGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsAffairGoalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsAffairGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
