import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WealthManagementDigitalTransformationBlogComponent } from './wealth-management-digital-transformation-blog.component';

describe('WealthManagementDigitalTransformationBlogComponent', () => {
  let component: WealthManagementDigitalTransformationBlogComponent;
  let fixture: ComponentFixture<WealthManagementDigitalTransformationBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WealthManagementDigitalTransformationBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WealthManagementDigitalTransformationBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
