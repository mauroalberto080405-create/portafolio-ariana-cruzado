import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDataService } from '../../core/services/profile-data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  private readonly profileService = inject(ProfileDataService);
  readonly profile = this.profileService.getProfile();

  copied = false;

  copyEmail(): void {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(this.profile.email).then(() => {
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 3000);
      });
    }
  }
}
