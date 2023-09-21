import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FintechIndustryBlogComponent } from './fintech-industry-blog.component';

describe('FintechIndustryBlogComponent', () => {
  let component: FintechIndustryBlogComponent;
  let fixture: ComponentFixture<FintechIndustryBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FintechIndustryBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FintechIndustryBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
