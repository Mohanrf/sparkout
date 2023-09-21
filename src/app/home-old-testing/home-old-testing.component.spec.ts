import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOldTestingComponent } from './home-old-testing.component';

describe('HomeOldTestingComponent', () => {
  let component: HomeOldTestingComponent;
  let fixture: ComponentFixture<HomeOldTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOldTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOldTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
