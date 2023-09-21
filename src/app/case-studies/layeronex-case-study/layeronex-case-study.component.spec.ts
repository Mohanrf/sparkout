import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayeronexCaseStudyComponent } from './layeronex-case-study.component';

describe('LayeronexCaseStudyComponent', () => {
  let component: LayeronexCaseStudyComponent;
  let fixture: ComponentFixture<LayeronexCaseStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayeronexCaseStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayeronexCaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
