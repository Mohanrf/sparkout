import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileApplicationDevelopmentNewComponent } from './mobile-application-development-new.component';

describe('MobileApplicationDevelopmentNewComponent', () => {
  let component: MobileApplicationDevelopmentNewComponent;
  let fixture: ComponentFixture<MobileApplicationDevelopmentNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileApplicationDevelopmentNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileApplicationDevelopmentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
