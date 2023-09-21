import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinelanguageComponent } from './machinelanguage.component';

describe('MachinelanguageComponent', () => {
  let component: MachinelanguageComponent;
  let fixture: ComponentFixture<MachinelanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachinelanguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinelanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
