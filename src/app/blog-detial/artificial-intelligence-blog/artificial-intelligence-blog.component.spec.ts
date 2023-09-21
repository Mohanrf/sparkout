import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtificialIntelligenceBlogComponent } from './artificial-intelligence-blog.component';

describe('ArtificialIntelligenceBlogComponent', () => {
  let component: ArtificialIntelligenceBlogComponent;
  let fixture: ComponentFixture<ArtificialIntelligenceBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtificialIntelligenceBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtificialIntelligenceBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
