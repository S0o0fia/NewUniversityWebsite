import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FineartCodesComponent } from './fineart-codes.component';

describe('FineartCodesComponent', () => {
  let component: FineartCodesComponent;
  let fixture: ComponentFixture<FineartCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FineartCodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FineartCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
