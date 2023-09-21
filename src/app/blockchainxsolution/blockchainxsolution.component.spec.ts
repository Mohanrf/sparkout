import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainxsolutionComponent } from './blockchainxsolution.component';

describe('BlockchainxsolutionComponent', () => {
  let component: BlockchainxsolutionComponent;
  let fixture: ComponentFixture<BlockchainxsolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockchainxsolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainxsolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
