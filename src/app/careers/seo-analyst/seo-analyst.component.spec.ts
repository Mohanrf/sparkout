import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoAnalystComponent } from './seo-analyst.component';

describe('SeoAnalystComponent', () => {
  let component: SeoAnalystComponent;
  let fixture: ComponentFixture<SeoAnalystComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeoAnalystComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoAnalystComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
