import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiBlogComponent } from './edi-blog.component';

describe('EdiBlogComponent', () => {
  let component: EdiBlogComponent;
  let fixture: ComponentFixture<EdiBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdiBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdiBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
