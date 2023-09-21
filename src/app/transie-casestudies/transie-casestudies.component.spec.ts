import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransieCasestudiesComponent } from './transie-casestudies.component';

describe('TransieCasestudiesComponent', () => {
  let component: TransieCasestudiesComponent;
  let fixture: ComponentFixture<TransieCasestudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransieCasestudiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransieCasestudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
