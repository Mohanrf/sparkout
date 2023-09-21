import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenSupplyChainManagementTrendsBlogComponent } from './top-ten-supply-chain-management-trends-blog.component';

describe('TopTenSupplyChainManagementTrendsBlogComponent', () => {
  let component: TopTenSupplyChainManagementTrendsBlogComponent;
  let fixture: ComponentFixture<TopTenSupplyChainManagementTrendsBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTenSupplyChainManagementTrendsBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTenSupplyChainManagementTrendsBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
