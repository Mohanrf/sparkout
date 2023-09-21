import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebApplicationDevelopmentComponent } from './web-application-development.component';

describe('WebApplicationDevelopmentComponent', () => {
  let component: WebApplicationDevelopmentComponent;
  let fixture: ComponentFixture<WebApplicationDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebApplicationDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebApplicationDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
