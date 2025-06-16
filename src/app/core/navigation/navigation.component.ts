import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { navigationItems } from './types/navigation-item';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  animations: [],
})
export class NavigationComponent implements OnInit {
  @ViewChild('menuBtn') menuBtn!: ElementRef<HTMLInputElement>; // Menu button element reference
  private isBrowser = false;

  isDarkTheme = true; // Variable to track the current theme
  navigationItems = navigationItems;

  constructor(
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.applyStoredTheme();
    }
  }

  // Apply stored theme from localStorage or match system preferences
  applyStoredTheme(): void {
    const storedTheme = localStorage.getItem('theme');

    // Default to dark theme if stored theme is not light
    const themeToApply = storedTheme === 'light' ? 'light' : 'dark';

    this.isDarkTheme = themeToApply === 'dark'; // Set isDarkTheme based on the resolved theme
    document.documentElement.setAttribute('data-theme', themeToApply);
    localStorage.setItem('theme', themeToApply);
  }

  // Toggle between light and dark themes
  toggleTheme(): void {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const targetTheme = currentTheme === 'light' ? 'dark' : 'light';

    this.isDarkTheme = targetTheme === 'dark'; // Update isDarkTheme
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
  }

  // Listens for click events on the entire document. If a click occurs outside the menu and menu button, checks the window width and hides the menu if window width is 768px or less
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    if (
      !this.elementRef.nativeElement.contains(target) &&
      this.menuBtn.nativeElement.checked
    ) {
      this.hideMenu();
    }
  }

  // Unchecks menu button, which hides the menu
  hideMenu() {
    if (this.menuBtn.nativeElement.checked) {
      this.menuBtn.nativeElement.checked = false;
    }
  }
}
