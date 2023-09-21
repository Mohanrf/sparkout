import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetdiscussComponent } from './letdiscuss.component';

describe('LetdiscussComponent', () => {
  let component: LetdiscussComponent;
  let fixture: ComponentFixture<LetdiscussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetdiscussComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetdiscussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
