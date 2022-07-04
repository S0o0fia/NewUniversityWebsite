import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchologyCodesComponent } from './archology-codes.component';

describe('ArchologyCodesComponent', () => {
  let component: ArchologyCodesComponent;
  let fixture: ComponentFixture<ArchologyCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchologyCodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchologyCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
