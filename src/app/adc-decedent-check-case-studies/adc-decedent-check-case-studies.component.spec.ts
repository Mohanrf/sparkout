import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdcDecedentCheckCaseStudiesComponent } from './adc-decedent-check-case-studies.component';

describe('AdcDecedentCheckCaseStudiesComponent', () => {
  let component: AdcDecedentCheckCaseStudiesComponent;
  let fixture: ComponentFixture<AdcDecedentCheckCaseStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdcDecedentCheckCaseStudiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdcDecedentCheckCaseStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
