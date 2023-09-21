import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideSparkoutComponent } from './inside-sparkout.component';

describe('InsideSparkoutComponent', () => {
  let component: InsideSparkoutComponent;
  let fixture: ComponentFixture<InsideSparkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsideSparkoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideSparkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
