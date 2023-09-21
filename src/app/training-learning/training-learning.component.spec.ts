import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingLearningComponent } from './training-learning.component';

describe('TrainingLearningComponent', () => {
  let component: TrainingLearningComponent;
  let fixture: ComponentFixture<TrainingLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingLearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
