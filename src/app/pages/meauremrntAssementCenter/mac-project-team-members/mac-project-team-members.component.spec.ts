import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacProjectTeamMembersComponent } from './mac-project-team-members.component';

describe('MacProjectTeamMembersComponent', () => {
  let component: MacProjectTeamMembersComponent;
  let fixture: ComponentFixture<MacProjectTeamMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacProjectTeamMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacProjectTeamMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
