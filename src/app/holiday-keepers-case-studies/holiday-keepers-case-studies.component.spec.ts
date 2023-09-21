import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayKeepersCaseStudiesComponent } from './holiday-keepers-case-studies.component';

describe('HolidayKeepersCaseStudiesComponent', () => {
  let component: HolidayKeepersCaseStudiesComponent;
  let fixture: ComponentFixture<HolidayKeepersCaseStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayKeepersCaseStudiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayKeepersCaseStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
