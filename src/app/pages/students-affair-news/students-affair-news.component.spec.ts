import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsAffairNewsComponent } from './students-affair-news.component';

describe('StudentsAffairNewsComponent', () => {
  let component: StudentsAffairNewsComponent;
  let fixture: ComponentFixture<StudentsAffairNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsAffairNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsAffairNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
