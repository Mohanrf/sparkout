import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaAndTestingComponent } from './qa-and-testing.component';

describe('QaAndTestingComponent', () => {
  let component: QaAndTestingComponent;
  let fixture: ComponentFixture<QaAndTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QaAndTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QaAndTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
