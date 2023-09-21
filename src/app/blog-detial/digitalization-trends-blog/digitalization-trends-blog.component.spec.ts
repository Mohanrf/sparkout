import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalizationTrendsBlogComponent } from './digitalization-trends-blog.component';

describe('DigitalizationTrendsBlogComponent', () => {
  let component: DigitalizationTrendsBlogComponent;
  let fixture: ComponentFixture<DigitalizationTrendsBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalizationTrendsBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalizationTrendsBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
