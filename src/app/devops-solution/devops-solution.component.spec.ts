import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsSolutionComponent } from './devops-solution.component';

describe('DevopsSolutionComponent', () => {
  let component: DevopsSolutionComponent;
  let fixture: ComponentFixture<DevopsSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevopsSolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevopsSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
