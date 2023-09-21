import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MernStackDeveloperComponent } from './mern-stack-developer.component';

describe('MernStackDeveloperComponent', () => {
  let component: MernStackDeveloperComponent;
  let fixture: ComponentFixture<MernStackDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MernStackDeveloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MernStackDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
