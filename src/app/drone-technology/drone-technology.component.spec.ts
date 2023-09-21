import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneTechnologyComponent } from './drone-technology.component';

describe('DroneTechnologyComponent', () => {
  let component: DroneTechnologyComponent;
  let fixture: ComponentFixture<DroneTechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroneTechnologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DroneTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
