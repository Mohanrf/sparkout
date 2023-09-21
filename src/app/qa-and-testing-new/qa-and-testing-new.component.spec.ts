import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaAndTestingNewComponent } from './qa-and-testing-new.component';

describe('QaAndTestingNewComponent', () => {
  let component: QaAndTestingNewComponent;
  let fixture: ComponentFixture<QaAndTestingNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QaAndTestingNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QaAndTestingNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
