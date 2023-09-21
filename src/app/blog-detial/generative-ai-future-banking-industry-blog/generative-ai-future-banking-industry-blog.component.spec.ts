import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerativeAiFutureBankingIndustryBlogComponent } from './generative-ai-future-banking-industry-blog.component';

describe('GenerativeAiFutureBankingIndustryBlogComponent', () => {
  let component: GenerativeAiFutureBankingIndustryBlogComponent;
  let fixture: ComponentFixture<GenerativeAiFutureBankingIndustryBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerativeAiFutureBankingIndustryBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerativeAiFutureBankingIndustryBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
