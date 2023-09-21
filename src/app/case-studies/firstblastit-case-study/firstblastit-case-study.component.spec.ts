import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstblastitCaseStudyComponent } from './firstblastit-case-study.component';

describe('FirstblastitCaseStudyComponent', () => {
  let component: FirstblastitCaseStudyComponent;
  let fixture: ComponentFixture<FirstblastitCaseStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstblastitCaseStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstblastitCaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
