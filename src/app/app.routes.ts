import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { TestimonialsComponent } from './features/testimonials/testimonials.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
  {
    path: 'hero',
    component: HeroComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'experience',
    component: ExperienceComponent,
  },
  {
    path: 'work',
    component: ProjectsComponent,
  },
  {
    path: 'reviews',
    component: TestimonialsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
