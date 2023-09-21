import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsBlogComponent } from './logistics-blog.component';

describe('LogisticsBlogComponent', () => {
  let component: LogisticsBlogComponent;
  let fixture: ComponentFixture<LogisticsBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticsBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
