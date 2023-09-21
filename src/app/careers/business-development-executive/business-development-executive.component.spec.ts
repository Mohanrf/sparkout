import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDevelopmentExecutiveComponent } from './business-development-executive.component';

describe('BusinessDevelopmentExecutiveComponent', () => {
  let component: BusinessDevelopmentExecutiveComponent;
  let fixture: ComponentFixture<BusinessDevelopmentExecutiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessDevelopmentExecutiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessDevelopmentExecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
