import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneDevelopmentComponent } from './drone-development.component';

describe('DroneDevelopmentComponent', () => {
  let component: DroneDevelopmentComponent;
  let fixture: ComponentFixture<DroneDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroneDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DroneDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
