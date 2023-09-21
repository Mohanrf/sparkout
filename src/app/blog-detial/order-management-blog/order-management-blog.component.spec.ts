import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderManagementBlogComponent } from './order-management-blog.component';

describe('OrderManagementBlogComponent', () => {
  let component: OrderManagementBlogComponent;
  let fixture: ComponentFixture<OrderManagementBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderManagementBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderManagementBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
