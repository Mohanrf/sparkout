import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCelebrationsComponent } from './events-celebrations.component';

describe('EventsCelebrationsComponent', () => {
  let component: EventsCelebrationsComponent;
  let fixture: ComponentFixture<EventsCelebrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsCelebrationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsCelebrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
