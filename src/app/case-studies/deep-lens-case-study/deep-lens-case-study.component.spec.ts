import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepLensCaseStudyComponent } from './deep-lens-case-study.component';

describe('DeepLensCaseStudyComponent', () => {
  let component: DeepLensCaseStudyComponent;
  let fixture: ComponentFixture<DeepLensCaseStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeepLensCaseStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepLensCaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
