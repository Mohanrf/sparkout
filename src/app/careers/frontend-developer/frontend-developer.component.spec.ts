import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendDeveloperComponent } from './frontend-developer.component';

describe('FrontendDeveloperComponent', () => {
  let component: FrontendDeveloperComponent;
  let fixture: ComponentFixture<FrontendDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendDeveloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
