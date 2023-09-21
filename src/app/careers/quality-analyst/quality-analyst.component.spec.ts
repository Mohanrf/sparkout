import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAnalystComponent } from './quality-analyst.component';

describe('QualityAnalystComponent', () => {
  let component: QualityAnalystComponent;
  let fixture: ComponentFixture<QualityAnalystComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityAnalystComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityAnalystComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
