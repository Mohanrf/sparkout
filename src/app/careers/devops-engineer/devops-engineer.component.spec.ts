import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsEngineerComponent } from './devops-engineer.component';

describe('DevopsEngineerComponent', () => {
  let component: DevopsEngineerComponent;
  let fixture: ComponentFixture<DevopsEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevopsEngineerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevopsEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
