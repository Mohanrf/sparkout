import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiBlockchainShapingFutureTechnologyComponent } from './ai-blockchain-shaping-future-technology.component';

describe('AiBlockchainShapingFutureTechnologyComponent', () => {
  let component: AiBlockchainShapingFutureTechnologyComponent;
  let fixture: ComponentFixture<AiBlockchainShapingFutureTechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiBlockchainShapingFutureTechnologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiBlockchainShapingFutureTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
