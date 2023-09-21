import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerScrollComponent } from './banner-scroll.component';

describe('BannerScrollComponent', () => {
  let component: BannerScrollComponent;
  let fixture: ComponentFixture<BannerScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
