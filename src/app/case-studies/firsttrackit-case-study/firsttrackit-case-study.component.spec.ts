import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirsttrackitCaseStudyComponent } from './firsttrackit-case-study.component';

describe('FirsttrackitCaseStudyComponent', () => {
  let component: FirsttrackitCaseStudyComponent;
  let fixture: ComponentFixture<FirsttrackitCaseStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirsttrackitCaseStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirsttrackitCaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
