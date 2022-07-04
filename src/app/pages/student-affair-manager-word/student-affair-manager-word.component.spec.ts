import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAffairManagerWordComponent } from './student-affair-manager-word.component';

describe('StudentAffairManagerWordComponent', () => {
  let component: StudentAffairManagerWordComponent;
  let fixture: ComponentFixture<StudentAffairManagerWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAffairManagerWordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAffairManagerWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
