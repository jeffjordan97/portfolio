import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { heroContent, HeroContent } from './types/hero-content';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  heroContent: HeroContent = heroContent;

  @ViewChild('typingText', { static: true }) textElement!: ElementRef;

  private destroy$ = new Subject<void>();

  typingSpeedMilliseconds: number = 150; // Typing speed
  deletingSpeedMilliseconds: number = 100; // Deleting speed
  pauseBetweenWordsMilliseconds: number = 1000; // Pause between words
  wordIndex: number = 0;
  isDeleting: Boolean = false;
  currentText: string = '';
  loopTimeout: any;

  constructor(private seo: SeoService) {}

  ngOnInit() {
    // this.startAnimation();
    this.seo.updateMetaData({
      title: 'Jeffrey Jordan Software Engineer',
      description: 'Jeffrey Jordan Software Engineer, North West, UK',
      image:
        'https://raw.githubusercontent.com/jeffjordan97/portfolio/refs/heads/master/src/assets/images/profile-img.PNG',
    });
  }

  startAnimation(): void {
    const words = this.heroContent.roles;
    const currentWord = words[this.wordIndex];

    if (this.isDeleting) {
      // Delete logic
      this.currentText = currentWord.substring(0, this.currentText.length - 1);
    } else {
      // Typing logic
      this.currentText = currentWord.substring(0, this.currentText.length + 1);
    }

    this.textElement.nativeElement.innerHTML = this.currentText;

    let timeoutDuration = this.typingSpeedMilliseconds;

    if (!this.isDeleting && this.currentText === currentWord) {
      // Word has been fully typed, start deleting after a pause
      timeoutDuration = this.pauseBetweenWordsMilliseconds;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentText === '') {
      // Word has been fully deleted, move to the next word
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % words.length;
      timeoutDuration = this.pauseBetweenWordsMilliseconds;
    }

    this.loopTimeout = setTimeout(() => this.startAnimation(), timeoutDuration);
  }

  ngOnDestroy() {
    if (this.loopTimeout) {
      clearTimeout(this.loopTimeout);
    }
    this.destroy$.next();
    this.destroy$.complete();
  }
}
