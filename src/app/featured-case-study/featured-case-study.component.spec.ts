import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCaseStudyComponent } from './featured-case-study.component';

describe('FeaturedCaseStudyComponent', () => {
  let component: FeaturedCaseStudyComponent;
  let fixture: ComponentFixture<FeaturedCaseStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedCaseStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedCaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
