import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiNewComponent } from './ai-new.component';

describe('AiNewComponent', () => {
  let component: AiNewComponent;
  let fixture: ComponentFixture<AiNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
