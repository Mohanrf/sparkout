import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  title = 'Chat App Development - Let People Connect better by developing a chat app | Sparkout Tech';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Launch your own chat app and messenger with our chat application development services. Hire an expert team with real-world experience in developing a chat app.' });
    this.meta.updateTag({ name: 'keywords', content: 'Chat App Development, Chat Application Development Services, Developing a Chat App' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Chat App Development - Let People Connect better by developing a chat app | Sparkout Tech' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/chat-application-development/' });
    this.meta.updateTag({ property: 'og:description', content: 'Launch your own chat app and messenger with our chat application development services. Hire an expert team with real-world experience in developing a chat app.' });
    this.meta.updateTag({ property: 'og:type', content: 'Websiten' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Chat App Development - Let People Connect better by developing a chat app | Sparkout Tech' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Launch your own chat app and messenger with our chat application development services. Hire an expert team with real-world experience in developing a chat app.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/chat-application-development/");
  }

}
