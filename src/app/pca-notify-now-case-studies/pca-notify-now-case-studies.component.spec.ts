import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcaNotifyNowCaseStudiesComponent } from './pca-notify-now-case-studies.component';

describe('PcaNotifyNowCaseStudiesComponent', () => {
  let component: PcaNotifyNowCaseStudiesComponent;
  let fixture: ComponentFixture<PcaNotifyNowCaseStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcaNotifyNowCaseStudiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcaNotifyNowCaseStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
