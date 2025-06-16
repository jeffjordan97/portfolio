import { Component, OnInit } from '@angular/core';
import {
  cloudDevOps,
  frameworksAndTools,
  languages,
  otherTechnologies,
  Technology,
} from '../../shared/types/technology';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  languages: Technology[] = languages;
  frameworksAndTools: Technology[] = frameworksAndTools;
  cloudDevOps: Technology[] = cloudDevOps;
  otherTechnologies: Technology[] = otherTechnologies;

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateMetaData({
      title: 'Jeffrey Jordan Software Engineer',
      description: 'Jeffrey Jordan Software Engineer, North West, UK',
      image:
        'https://raw.githubusercontent.com/jeffjordan97/portfolio/refs/heads/master/src/assets/images/profile-img.PNG',
    });
  }
}
