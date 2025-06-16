import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHeaderCard, aboutHeaderCards } from './types/about-content';
import { Utils } from '../../core/utils/utils';
import { SeoService } from '../../services/seo.service';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { afterNextRender } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  cards: AboutHeaderCard[] = aboutHeaderCards;
  private isBrowser = false;

  constructor(
    private elementRef: ElementRef,
    private seo: SeoService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.seo.updateMetaData({
      title: 'Jeffrey Jordan Software Engineer',
      description: 'Jeffrey Jordan Software Engineer, North West, UK',
      image:
        'https://raw.githubusercontent.com/jeffjordan97/portfolio/refs/heads/master/src/assets/images/profile-img.PNG',
    });
  }

  aboutCards!: HTMLElement[];

  ngAfterViewInit(): void {
    this.aboutCards = Array.from(
      this.elementRef.nativeElement.querySelectorAll('#about .card')
    ) as HTMLElement[];

    this.animateAboutCards();
  }

  // Listen to window scroll event
  @HostListener('window:scroll', [])
  onScroll(): void {
    this.animateAboutCards();
  }

  // Add animation class to about cards
  animateAboutCards(): void {
    if (this.isBrowser) {
      const isSmallScreen = window.innerWidth < 575.98;
      const animationClass = isSmallScreen
        ? 'slideDownFadeIn'
        : 'slideInLeftFadeIn';

      this.aboutCards.forEach((project: HTMLElement) => {
        const projectTop = project.getBoundingClientRect().top;

        if (window.innerHeight * 0.9 > projectTop) {
          if (window.innerHeight * 0.9 > projectTop) {
            Utils.addAnimationClass(project, animationClass);
          }
        }
      });
    }
  }
}
