import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransgenieComponent } from './transgenie.component';

describe('TransgenieComponent', () => {
  let component: TransgenieComponent;
  let fixture: ComponentFixture<TransgenieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransgenieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransgenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
