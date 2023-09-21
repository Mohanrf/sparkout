import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkoutsSixthYearAnniversaryBlogComponent } from './sparkouts-sixth-year-anniversary-blog.component';

describe('SparkoutsSixthYearAnniversaryBlogComponent', () => {
  let component: SparkoutsSixthYearAnniversaryBlogComponent;
  let fixture: ComponentFixture<SparkoutsSixthYearAnniversaryBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparkoutsSixthYearAnniversaryBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkoutsSixthYearAnniversaryBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
