import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyMoreComponent } from './case-study-more.component';

describe('CaseStudyMoreComponent', () => {
  let component: CaseStudyMoreComponent;
  let fixture: ComponentFixture<CaseStudyMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseStudyMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudyMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
