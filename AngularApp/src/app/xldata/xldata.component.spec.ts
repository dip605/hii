import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XldataComponent } from './xldata.component';

describe('XldataComponent', () => {
  let component: XldataComponent;
  let fixture: ComponentFixture<XldataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XldataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
