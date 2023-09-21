import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigDataAnalyticsBlogComponent } from './big-data-analytics-blog.component';

describe('BigDataAnalyticsBlogComponent', () => {
  let component: BigDataAnalyticsBlogComponent;
  let fixture: ComponentFixture<BigDataAnalyticsBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigDataAnalyticsBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigDataAnalyticsBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
