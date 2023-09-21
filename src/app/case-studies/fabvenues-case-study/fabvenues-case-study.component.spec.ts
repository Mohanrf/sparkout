import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabvenuesCaseStudyComponent } from './fabvenues-case-study.component';

describe('FabvenuesCaseStudyComponent', () => {
  let component: FabvenuesCaseStudyComponent;
  let fixture: ComponentFixture<FabvenuesCaseStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabvenuesCaseStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FabvenuesCaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
