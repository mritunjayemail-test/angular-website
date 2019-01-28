import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsPage1Component } from './aws-page1.component';

describe('AwsPage1Component', () => {
  let component: AwsPage1Component;
  let fixture: ComponentFixture<AwsPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwsPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
