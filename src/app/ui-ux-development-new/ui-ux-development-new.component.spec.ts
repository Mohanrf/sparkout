import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUxDevelopmentNewComponent } from './ui-ux-development-new.component';

describe('UiUxDevelopmentNewComponent', () => {
  let component: UiUxDevelopmentNewComponent;
  let fixture: ComponentFixture<UiUxDevelopmentNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiUxDevelopmentNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiUxDevelopmentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
