import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileApplicationDevelopmentComponent } from './mobile-application-development.component';

describe('MobileApplicationDevelopmentComponent', () => {
  let component: MobileApplicationDevelopmentComponent;
  let fixture: ComponentFixture<MobileApplicationDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileApplicationDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileApplicationDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
