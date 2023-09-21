import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeanStackDeveloperComponent } from './mean-stack-developer.component';

describe('MeanStackDeveloperComponent', () => {
  let component: MeanStackDeveloperComponent;
  let fixture: ComponentFixture<MeanStackDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeanStackDeveloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeanStackDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
