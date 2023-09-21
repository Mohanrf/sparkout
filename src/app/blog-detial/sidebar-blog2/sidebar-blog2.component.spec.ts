import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBlog2Component } from './sidebar-blog2.component';

describe('SidebarBlog2Component', () => {
  let component: SidebarBlog2Component;
  let fixture: ComponentFixture<SidebarBlog2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarBlog2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarBlog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
