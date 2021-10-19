import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmikujiComponent } from './omikuji.component';

describe('OmikujiComponent', () => {
  let component: OmikujiComponent;
  let fixture: ComponentFixture<OmikujiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmikujiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmikujiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
