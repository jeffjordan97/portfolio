import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Review, reviews } from './types/review';
import { SeoService } from '../../services/seo.service';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent implements OnInit {
  reviews: Review[] = reviews;
  stars = new Array(5);
  private isBrowser = false;

  constructor(
    private elementRef: ElementRef,
    private seo: SeoService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  reviewCards!: HTMLElement[];

  ngOnInit(): void {
    this.seo.updateMetaData({
      title: 'Jeffrey Jordan Software Engineer',
      description: 'Jeffrey Jordan Software Engineer, North West, UK',
      image:
        'https://raw.githubusercontent.com/jeffjordan97/portfolio/refs/heads/master/src/assets/images/profile-img.PNG',
    });
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.reviewCards = Array.from(
        this.elementRef.nativeElement.querySelectorAll('#testimonials .review')
      ) as HTMLElement[];
    }
  }

  // Listen to window scroll event
  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.isBrowser) {
      this.reviewCards.forEach((reviewCard: HTMLElement) => {
        const cardTop = reviewCard.getBoundingClientRect().top;

        if (window.innerHeight * 0.8 > cardTop) {
          reviewCard.classList.add('slideUpFadeIn');
        }
      });
    }
  }
}
