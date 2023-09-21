import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAppDevelopmentNewComponent } from './web-app-development-new.component';

describe('WebAppDevelopmentNewComponent', () => {
  let component: WebAppDevelopmentNewComponent;
  let fixture: ComponentFixture<WebAppDevelopmentNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebAppDevelopmentNewComponent]
    });
    fixture = TestBed.createComponent(WebAppDevelopmentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
