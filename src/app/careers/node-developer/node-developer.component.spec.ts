import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeDeveloperComponent } from './node-developer.component';

describe('NodeDeveloperComponent', () => {
  let component: NodeDeveloperComponent;
  let fixture: ComponentFixture<NodeDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeDeveloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
