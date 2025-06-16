import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
} from '@angular/core';
import { Project, projects } from './types/project';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../services/seo.service';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  projects: Project[] = projects;
  private isBrowser = false;

  constructor(
    private elementRef: ElementRef,
    private seo: SeoService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.seo.updateMetaData({
      title: 'Jeffrey Jordan Software Engineer',
      description: 'Jeffrey Jordan Software Engineer, North West, UK',
      image:
        'https://raw.githubusercontent.com/jeffjordan97/portfolio/refs/heads/master/src/assets/images/profile-img.PNG',
    });
  }

  projectCards!: HTMLElement[];

  ngAfterViewInit(): void {
    this.projectCards = Array.from(
      this.elementRef.nativeElement.querySelectorAll('.project')
    ) as HTMLElement[];
  }

  // Listen to window scroll event
  @HostListener('window:scroll', [])
  onScroll(): void {
    this.projectCards.forEach((project: HTMLElement) => {
      const projectTop = project.getBoundingClientRect().top;

      if (this.isBrowser && window.innerHeight * 0.8 > projectTop) {
        project.classList.add('slideUpFadeIn');
      }
    });
  }
}
