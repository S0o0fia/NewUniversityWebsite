import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAffairTasksComponent } from './student-affair-tasks.component';

describe('StudentAffairTasksComponent', () => {
  let component: StudentAffairTasksComponent;
  let fixture: ComponentFixture<StudentAffairTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAffairTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAffairTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
