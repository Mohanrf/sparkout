import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidityDeveloperComponent } from './solidity-developer.component';

describe('SolidityDeveloperComponent', () => {
  let component: SolidityDeveloperComponent;
  let fixture: ComponentFixture<SolidityDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolidityDeveloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidityDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
