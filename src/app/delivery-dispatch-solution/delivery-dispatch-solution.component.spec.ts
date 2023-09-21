import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryDispatchSolutionComponent } from './delivery-dispatch-solution.component';

describe('DeliveryDispatchSolutionComponent', () => {
  let component: DeliveryDispatchSolutionComponent;
  let fixture: ComponentFixture<DeliveryDispatchSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryDispatchSolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryDispatchSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
