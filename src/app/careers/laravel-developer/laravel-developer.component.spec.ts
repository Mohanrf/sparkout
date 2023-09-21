import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaravelDeveloperComponent } from './laravel-developer.component';

describe('LaravelDeveloperComponent', () => {
  let component: LaravelDeveloperComponent;
  let fixture: ComponentFixture<LaravelDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaravelDeveloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaravelDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
