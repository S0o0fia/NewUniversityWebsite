import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsAffairMessageComponent } from './students-affair-message.component';

describe('StudentsAffairMessageComponent', () => {
  let component: StudentsAffairMessageComponent;
  let fixture: ComponentFixture<StudentsAffairMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsAffairMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsAffairMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
