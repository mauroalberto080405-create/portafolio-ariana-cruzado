import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDataService } from '../../../core/services/profile-data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private readonly profileService = inject(ProfileDataService);
  readonly profile = this.profileService.getProfile();

  isScrolled = false;
  isMobileMenuOpen = false;

  navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Casos Prácticos', href: '#casos-practicos' },
    { label: 'Formación', href: '#formacion' },
    { label: 'Competencias', href: '#competencias' },
    { label: 'Contacto', href: '#contacto' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 24;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
