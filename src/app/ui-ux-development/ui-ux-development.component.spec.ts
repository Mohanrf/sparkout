import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUxDevelopmentComponent } from './ui-ux-development.component';

describe('UiUxDevelopmentComponent', () => {
  let component: UiUxDevelopmentComponent;
  let fixture: ComponentFixture<UiUxDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiUxDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiUxDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
