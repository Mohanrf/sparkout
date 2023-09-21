import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerativeAiDrivingChangeFinancialServicesBlogComponent } from './generative-ai-driving-change-financial-services-blog.component';

describe('GenerativeAiDrivingChangeFinancialServicesBlogComponent', () => {
  let component: GenerativeAiDrivingChangeFinancialServicesBlogComponent;
  let fixture: ComponentFixture<GenerativeAiDrivingChangeFinancialServicesBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerativeAiDrivingChangeFinancialServicesBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerativeAiDrivingChangeFinancialServicesBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
