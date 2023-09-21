import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerOverviewComponent } from './career-overview.component';

describe('CareerOverviewComponent', () => {
  let component: CareerOverviewComponent;
  let fixture: ComponentFixture<CareerOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
