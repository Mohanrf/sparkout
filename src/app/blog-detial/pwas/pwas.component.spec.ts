import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwasBlogComponent } from './pwas.component';

describe('PwasBlogComponent', () => {
  let component: PwasBlogComponent;
  let fixture: ComponentFixture<PwasBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwasBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwasBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
