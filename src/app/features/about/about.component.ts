import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDataService } from '../../core/services/profile-data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  private readonly profileService = inject(ProfileDataService);
  readonly profile = this.profileService.getProfile();

  readonly pillars = [
    {
      title: 'Gestión y Organización',
      description: 'Capacidad demostrada en el día a día de Johari Shop Beauty para coordinar operaciones, inventario y planificación con responsabilidad.'
    },
    {
      title: 'Atención al Cliente',
      description: 'Trato directo, escucha activa y vocación de servicio para resolver consultas, fidelizar compradores y generar relaciones de confianza.'
    },
    {
      title: 'Apertura al Aprendizaje y Visión Global',
      description: 'Compromiso constante por fortalecer competencias en administración y negocios internacionales mediante vivencias académicas en Perú y el exterior.'
    }
  ];
}
