import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-discord-like-chat-app-blog',
  templateUrl: './discord-like-chat-app-blog.component.html',
  styleUrls: ['./discord-like-chat-app-blog.component.css'],
})
export class DiscordLikeChatAppBlogComponent implements OnInit {
  title =
    'Build a chat app like Discord & Explore Beyond Interpersonal Communication | Sparkout';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({
      name: 'description',
      content:
        'Communities are the primary growth of business, and Discord app creation serves as the point of connection.And when its proven to excel with their extempore capabilities, why not build your chat app like Discord to stand out of the crowd?Read in detail.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'how to make an app like Discord, Discord app creation, build a chat app like Discord.',
    });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Build a chat app like Discord & Explore Beyond Interpersonal Communication | Sparkout',
    });
    this.meta.updateTag({
      property: 'og:site_name',
      content: 'Sparkout Tech Solutions',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.sparkouttech.com/build-chat-app-like-discord/',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Communities are the primary growth of business, and Discord app creation serves as the point of connection.And when its proven to excel with their extempore capabilities, why not build your chat app like Discord to stand out of the crowd?Read in detail.',
    });
    this.meta.updateTag({
      property: 'og:type',
      content:
        'Communities are the primary growth of business, and Discord app creation serves as the point of connection.And when its proven to excel with their extempore capabilities, why not build your chat app like Discord to stand out of the crowd?Read in detail.',
    });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.sparkouttech.com/assets/images/blog-details/discard-like-chat-app-blog/build-chat-app-like-discord-banner.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.sparkouttech.com/',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Build a chat app like Discord & Explore Beyond Interpersonal Communication | Sparkout',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Communities are the primary growth of business, and Discord app creation serves as the point of connection.And when its proven to excel with their extempore capabilities, why not build your chat app like Discord to stand out of the crowd?Read in detail.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.sparkouttech.com/assets/images/blog-details/discard-like-chat-app-blog/build-chat-app-like-discord-banner.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.sparkouttech.com/build-chat-app-like-discord/'
    );
  }
}
