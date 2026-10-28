import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDataService } from '../../core/services/profile-data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  private readonly profileService = inject(ProfileDataService);
  readonly skillCategories = this.profileService.getSkillCategories();
  readonly languages = this.profileService.getLanguages();
}
