import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FintechFutureWealthManagementBlogComponent } from './fintech-future-wealth-management-blog.component';

describe('FintechFutureWealthManagementBlogComponent', () => {
  let component: FintechFutureWealthManagementBlogComponent;
  let fixture: ComponentFixture<FintechFutureWealthManagementBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FintechFutureWealthManagementBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FintechFutureWealthManagementBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
