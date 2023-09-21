import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareTechnologyBlogComponent } from './healthcare-technology-blog.component';

describe('HealthcareTechnologyBlogComponent', () => {
  let component: HealthcareTechnologyBlogComponent;
  let fixture: ComponentFixture<HealthcareTechnologyBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthcareTechnologyBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthcareTechnologyBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
