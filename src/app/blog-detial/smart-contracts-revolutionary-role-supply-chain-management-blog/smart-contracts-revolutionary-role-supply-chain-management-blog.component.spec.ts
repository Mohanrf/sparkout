import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartContractsRevolutionaryRoleSupplyChainManagementBlogComponent } from './smart-contracts-revolutionary-role-supply-chain-management-blog.component';

describe('SmartContractsRevolutionaryRoleSupplyChainManagementBlogComponent', () => {
  let component: SmartContractsRevolutionaryRoleSupplyChainManagementBlogComponent;
  let fixture: ComponentFixture<SmartContractsRevolutionaryRoleSupplyChainManagementBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartContractsRevolutionaryRoleSupplyChainManagementBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartContractsRevolutionaryRoleSupplyChainManagementBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
