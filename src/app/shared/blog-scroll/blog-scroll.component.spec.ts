import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogScrollComponent } from './blog-scroll.component';

describe('BlogScrollComponent', () => {
  let component: BlogScrollComponent;
  let fixture: ComponentFixture<BlogScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
