import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineLearningForAssetManagementEnsuresLowRiskBlogComponent } from './machine-learning-for-asset-management-ensures-low-risk-blog.component';

describe('MachineLearningForAssetManagementEnsuresLowRiskBlogComponent', () => {
  let component: MachineLearningForAssetManagementEnsuresLowRiskBlogComponent;
  let fixture: ComponentFixture<MachineLearningForAssetManagementEnsuresLowRiskBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineLearningForAssetManagementEnsuresLowRiskBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineLearningForAssetManagementEnsuresLowRiskBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
