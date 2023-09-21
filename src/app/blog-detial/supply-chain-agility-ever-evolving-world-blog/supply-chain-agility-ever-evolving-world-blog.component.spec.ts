import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyChainAgilityEverEvolvingWorldBlogComponent } from './supply-chain-agility-ever-evolving-world-blog.component';

describe('SupplyChainAgilityEverEvolvingWorldBlogComponent', () => {
  let component: SupplyChainAgilityEverEvolvingWorldBlogComponent;
  let fixture: ComponentFixture<SupplyChainAgilityEverEvolvingWorldBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplyChainAgilityEverEvolvingWorldBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyChainAgilityEverEvolvingWorldBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
