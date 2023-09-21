import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainDevelopmentComponent } from './blockchain-development.component';

describe('BlockchainDevelopmentComponent', () => {
  let component: BlockchainDevelopmentComponent;
  let fixture: ComponentFixture<BlockchainDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockchainDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
