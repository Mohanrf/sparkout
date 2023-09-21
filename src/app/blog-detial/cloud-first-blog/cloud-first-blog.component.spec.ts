import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudFirstBlogComponent } from './cloud-first-blog.component';

describe('CloudFirstBlogComponent', () => {
  let component: CloudFirstBlogComponent;
  let fixture: ComponentFixture<CloudFirstBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudFirstBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudFirstBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
