import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsNewComponent } from './devops-new.component';

describe('DevopsNewComponent', () => {
  let component: DevopsNewComponent;
  let fixture: ComponentFixture<DevopsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevopsNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevopsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
