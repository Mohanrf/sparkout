import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetDiscussTransgenieComponent } from './let-discuss-transgenie.component';

describe('LetDiscussTransgenieComponent', () => {
  let component: LetDiscussTransgenieComponent;
  let fixture: ComponentFixture<LetDiscussTransgenieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetDiscussTransgenieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetDiscussTransgenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
