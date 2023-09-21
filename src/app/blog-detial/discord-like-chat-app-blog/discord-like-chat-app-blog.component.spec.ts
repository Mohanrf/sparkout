import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordLikeChatAppBlogComponent } from './discord-like-chat-app-blog.component';

describe('DiscordLikeChatAppBlogComponent', () => {
  let component: DiscordLikeChatAppBlogComponent;
  let fixture: ComponentFixture<DiscordLikeChatAppBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscordLikeChatAppBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscordLikeChatAppBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
