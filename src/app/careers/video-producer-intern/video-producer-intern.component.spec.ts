import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoProducerInternComponent } from './video-producer-intern.component';

describe('VideoProducerInternComponent', () => {
  let component: VideoProducerInternComponent;
  let fixture: ComponentFixture<VideoProducerInternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoProducerInternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoProducerInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
