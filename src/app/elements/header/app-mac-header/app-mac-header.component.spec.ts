import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMacHeaderComponent } from './app-mac-header.component';

describe('AppMacHeaderComponent', () => {
  let component: AppMacHeaderComponent;
  let fixture: ComponentFixture<AppMacHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMacHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMacHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
