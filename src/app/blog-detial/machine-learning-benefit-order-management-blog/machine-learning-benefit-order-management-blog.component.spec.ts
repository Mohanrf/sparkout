import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineLearningBenefitOrderManagementBlogComponent } from './machine-learning-benefit-order-management-blog.component';

describe('MachineLearningBenefitOrderManagementBlogComponent', () => {
  let component: MachineLearningBenefitOrderManagementBlogComponent;
  let fixture: ComponentFixture<MachineLearningBenefitOrderManagementBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineLearningBenefitOrderManagementBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineLearningBenefitOrderManagementBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
