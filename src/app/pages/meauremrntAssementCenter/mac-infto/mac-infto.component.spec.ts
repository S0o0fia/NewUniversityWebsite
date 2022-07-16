import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacInftoComponent } from './mac-infto.component';

describe('MacInftoComponent', () => {
  let component: MacInftoComponent;
  let fixture: ComponentFixture<MacInftoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacInftoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacInftoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
