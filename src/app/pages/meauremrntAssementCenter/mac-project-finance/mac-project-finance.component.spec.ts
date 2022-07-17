import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacProjectFinanceComponent } from './mac-project-finance.component';

describe('MacProjectFinanceComponent', () => {
  let component: MacProjectFinanceComponent;
  let fixture: ComponentFixture<MacProjectFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacProjectFinanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacProjectFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
