import { Injectable, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(private meta: Meta, private titleService: Title) {}

  updateMetaData(metaData: {
    title: string;
    description: string;
    image?: string;
    slug?: string;
  }) {
    this.titleService.setTitle(metaData.title);

    const url = 'https://jeffreyjordan.dev/' + (metaData.slug || '');

    this.meta.updateTag({ name: 'description', content: metaData.description });
    this.meta.updateTag({ name: 'og:title', content: metaData.title });
    this.meta.updateTag({
      name: 'og:description',
      content: metaData.description,
    });
    this.meta.updateTag({ name: 'og:url', content: url });
    this.meta.updateTag({ name: 'og:type', content: 'website' });

    if (metaData.image) {
      this.meta.updateTag({ name: 'og:image', content: metaData.image });
      this.meta.updateTag({ name: 'twitter:image', content: metaData.image });
    }

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    this.meta.updateTag({ name: 'twitter:title', content: metaData.title });
    this.meta.updateTag({
      name: 'twitter:description',
      content: metaData.description,
    });
  }
}
