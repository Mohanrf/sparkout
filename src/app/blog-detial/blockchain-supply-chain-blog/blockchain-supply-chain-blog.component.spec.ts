import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainSupplyChainBlogComponent } from './blockchain-supply-chain-blog.component';

describe('BlockchainSupplyChainBlogComponent', () => {
  let component: BlockchainSupplyChainBlogComponent;
  let fixture: ComponentFixture<BlockchainSupplyChainBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockchainSupplyChainBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainSupplyChainBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
