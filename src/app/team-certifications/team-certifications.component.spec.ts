import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCertificationsComponent } from './team-certifications.component';

describe('TeamCertificationsComponent', () => {
  let component: TeamCertificationsComponent;
  let fixture: ComponentFixture<TeamCertificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamCertificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
