import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactArtificialIntelligenceBlogComponent } from './impact-artificial-intelligence-blog.component';

describe('ImpactArtificialIntelligenceBlogComponent', () => {
  let component: ImpactArtificialIntelligenceBlogComponent;
  let fixture: ComponentFixture<ImpactArtificialIntelligenceBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpactArtificialIntelligenceBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactArtificialIntelligenceBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
