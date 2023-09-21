import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmsentCaseStudyComponent } from './farmsent-case-study.component';

describe('FarmsentCaseStudyComponent', () => {
  let component: FarmsentCaseStudyComponent;
  let fixture: ComponentFixture<FarmsentCaseStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmsentCaseStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmsentCaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
