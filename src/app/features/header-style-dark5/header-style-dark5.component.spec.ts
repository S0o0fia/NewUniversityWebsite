import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStyleDark5Component } from './header-style-dark5.component';

describe('HeaderStyleDark5Component', () => {
  let component: HeaderStyleDark5Component;
  let fixture: ComponentFixture<HeaderStyleDark5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderStyleDark5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderStyleDark5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
