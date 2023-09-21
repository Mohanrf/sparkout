import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangingLandscapeInvestmentBankingFintechBlogComponent } from './changing-landscape-investment-banking-fintech-blog.component';

describe('ChangingLandscapeInvestmentBankingFintechBlogComponent', () => {
  let component: ChangingLandscapeInvestmentBankingFintechBlogComponent;
  let fixture: ComponentFixture<ChangingLandscapeInvestmentBankingFintechBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangingLandscapeInvestmentBankingFintechBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangingLandscapeInvestmentBankingFintechBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
