import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerativeAiNewComponent } from './generative-ai-new.component';

describe('GenerativeAiNewComponent', () => {
  let component: GenerativeAiNewComponent;
  let fixture: ComponentFixture<GenerativeAiNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerativeAiNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerativeAiNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
