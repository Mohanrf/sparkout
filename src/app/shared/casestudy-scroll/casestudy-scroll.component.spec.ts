import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasestudyScrollComponent } from './casestudy-scroll.component';

describe('CasestudyScrollComponent', () => {
  let component: CasestudyScrollComponent;
  let fixture: ComponentFixture<CasestudyScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasestudyScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasestudyScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
