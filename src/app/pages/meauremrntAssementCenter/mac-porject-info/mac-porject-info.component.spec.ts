import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacPorjectInfoComponent } from './mac-porject-info.component';

describe('MacPorjectInfoComponent', () => {
  let component: MacPorjectInfoComponent;
  let fixture: ComponentFixture<MacPorjectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacPorjectInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacPorjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
