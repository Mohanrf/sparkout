import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FintechSolutionComponent } from './fintech-solution.component';

describe('FintechSolutionComponent', () => {
  let component: FintechSolutionComponent;
  let fixture: ComponentFixture<FintechSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FintechSolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FintechSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
