import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAffairInfoComponent } from './student-affair-info.component';

describe('StudentAffairInfoComponent', () => {
  let component: StudentAffairInfoComponent;
  let fixture: ComponentFixture<StudentAffairInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAffairInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAffairInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
