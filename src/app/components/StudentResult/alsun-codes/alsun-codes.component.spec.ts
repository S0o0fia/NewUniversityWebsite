import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsunCodesComponent } from './alsun-codes.component';

describe('AlsunCodesComponent', () => {
  let component: AlsunCodesComponent;
  let fixture: ComponentFixture<AlsunCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlsunCodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsunCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
