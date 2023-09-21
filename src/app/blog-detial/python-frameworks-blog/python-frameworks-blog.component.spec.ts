import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonFrameworksBlogComponent } from './python-frameworks-blog.component';

describe('PythonFrameworksBlogComponent', () => {
  let component: PythonFrameworksBlogComponent;
  let fixture: ComponentFixture<PythonFrameworksBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonFrameworksBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonFrameworksBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
