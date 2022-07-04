import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsAffairNewDetailsComponent } from './students-affair-new-details.component';

describe('StudentsAffairNewDetailsComponent', () => {
  let component: StudentsAffairNewDetailsComponent;
  let fixture: ComponentFixture<StudentsAffairNewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsAffairNewDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsAffairNewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
