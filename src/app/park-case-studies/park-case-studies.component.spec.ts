import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkCaseStudiesComponent } from './park-case-studies.component';

describe('ParkCaseStudiesComponent', () => {
  let component: ParkCaseStudiesComponent;
  let fixture: ComponentFixture<ParkCaseStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkCaseStudiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkCaseStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
