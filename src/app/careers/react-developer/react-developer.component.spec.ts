import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactDeveloperComponent } from './react-developer.component';

describe('ReactDeveloperComponent', () => {
  let component: ReactDeveloperComponent;
  let fixture: ComponentFixture<ReactDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactDeveloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
