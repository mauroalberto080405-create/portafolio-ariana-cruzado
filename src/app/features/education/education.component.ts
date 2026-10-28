import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDataService } from '../../core/services/profile-data.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  private readonly profileService = inject(ProfileDataService);
  readonly education = this.profileService.getEducation();
  readonly internationalExperiences = this.profileService.getInternationalExperiences();
}
