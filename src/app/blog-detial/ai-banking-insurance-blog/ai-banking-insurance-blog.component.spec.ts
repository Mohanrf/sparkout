import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiBankingInsuranceBlogComponent } from './ai-banking-insurance-blog.component';

describe('AiBankingInsuranceBlogComponent', () => {
  let component: AiBankingInsuranceBlogComponent;
  let fixture: ComponentFixture<AiBankingInsuranceBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiBankingInsuranceBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiBankingInsuranceBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
