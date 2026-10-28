import { Injectable } from '@angular/core';
import { IContentService } from './content.service';
import {
  ProfileSummary,
  WorkExperience,
  AcademicEducation,
  InternationalExperience,
  SkillCategory,
  LanguageSkill,
  CaseStudy
} from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService implements IContentService {
  private readonly profile: ProfileSummary = {
    fullName: 'Ariana Guadalupe Cruzado Cotrina',
    preferredName: 'Ariana Cruzado',
    headline: 'Estudiante de Administración y Negocios Internacionales | Emprendedora',
    location: 'Trujillo, La Libertad, Perú',
    email: 'arianitacruzado20@gmail.com',
    aboutNarrative: [
      'Estudiante de octavo ciclo de la carrera de Administración y Negocios Internacionales en la Universidad Privada del Norte (UPN), orientada al aprendizaje continuo y a la aplicación práctica de principios de gestión empresarial.',
      'Mi trayectoria combina la rigurosidad académica con la experiencia directa en Johari Shop Beauty, emprendimiento en el que me desempeño como gerente y propietaria desde abril de 2022. Esta vivencia me ha permitido asumir la gestión operativa, la atención personalizada a clientes, la planificación de compras y la promoción digital en el mercado local.',
      'Cuento además con experiencias académicas internacionales en Panamá y Colombia, orientadas a la innovación, el liderazgo y el comercio exterior. Mi propósito profesional es aportar compromiso, orden y visión de servicio en organizaciones y equipos en crecimiento.'
    ],
    keyStrengths: [
      'Gestión y organización operativa de negocios',
      'Atención al cliente con enfoque de servicio y empatía',
      'Planificación de compras y abastecimiento de inventario',
      'Promoción comercial y presencia en redes sociales',
      'Disposición constante hacia el aprendizaje y la mejora'
    ],
    ctaButtons: [
      {
        label: 'Conoce mi experiencia',
        url: '#experiencia',
        type: 'primary'
      },
      {
        label: 'Ver formación',
        url: '#formacion',
        type: 'secondary'
      },
      {
        label: 'Contactar',
        url: '#contacto',
        type: 'outline'
      }
    ]
  };

  private readonly experiences: WorkExperience[] = [
    {
      id: 'johari-shop-beauty',
      role: 'Gerente y Propietaria',
      organization: 'Johari Shop Beauty',
      businessType: 'Emprendimiento de belleza y cuidado personal',
      period: 'Abril 2022 – Actualidad',
      isCurrent: true,
      location: 'Trujillo, Perú',
      description: 'Liderazgo y ejecución integral de las operaciones comerciales, administrativas y de servicio al cliente de la tienda de belleza.',
      responsibilities: [
        'Gestión integral de las operaciones del negocio y organización de actividades diarias.',
        'Planificación de compras periódicas y abastecimiento de productos de acuerdo con la demanda local.',
        'Atención personalizada y asesoramiento directo a clientes en tienda y canales de mensajería.',
        'Promoción de productos y administración estratégica de contenidos en redes sociales.',
        'Posicionamiento local de la marca mediante iniciativas de marketing digital.'
      ],
      verifiedScope: 'Actividad empresarial verificada en CV. Refleja experiencia autónoma en gestión comercial, servicio y coordinación logística básica.',
      skillsApplied: [
        'Organización',
        'Planificación de compras',
        'Atención al cliente',
        'Gestión de redes sociales',
        'Liderazgo'
      ]
    }
  ];

  private readonly education: AcademicEducation[] = [
    {
      id: 'upn-admin-negocios',
      degree: 'Administración y Negocios Internacionales',
      institution: 'Universidad Privada del Norte (UPN)',
      period: 'Marzo 2023 – Actualidad',
      status: '8.º ciclo académico registrado',
      description: 'Formación orientada a la dirección empresarial, análisis de mercados internacionales, procesos de gestión comercial y desarrollo de competencias estratégicas.'
    }
  ];

  private readonly internationalExperiences: InternationalExperience[] = [
    {
      id: 'curso-panama',
      title: 'Curso "Estrategias globales para un mundo en cambio: Innovación, comercio y liderazgo"',
      type: 'curso',
      destination: 'Panamá',
      period: 'Completado (según registro en CV)',
      description: 'Programa de formación complementaria internacional enfocado en tendencias de innovación, liderazgo directivo y nuevos modelos de comercio global.',
      competencies: [
        'Visión comercial global',
        'Innovación en modelos de negocio',
        'Liderazgo y toma de decisiones'
      ]
    },
    {
      id: 'mision-colombia',
      title: 'Misión Académica Internacional Perú – Colombia',
      type: 'mision-academica',
      destination: 'Colombia / Perú',
      period: 'Completado (según registro en CV)',
      description: 'Participación en misión académica orientada al intercambio de experiencias, comprensión de entornos de negocio regionales y articulación de perspectivas binacionales.',
      competencies: [
        'Perspectiva internacional',
        'Adaptabilidad cultural',
        'Intercambio académico'
      ]
    }
  ];

  private readonly skillCategories: SkillCategory[] = [
    {
      categoryName: 'Competencias de Gestión y Liderazgo',
      description: 'Habilidades desarrolladas a través de la dirección de su propio negocio y el trabajo académico universitario.',
      skills: [
        {
          name: 'Organización',
          context: 'Evidenciada en la coordinación integral de operaciones y rutinas en Johari Shop Beauty.'
        },
        {
          name: 'Planificación',
          context: 'Aplicada a la compra programada de mercadería y gestión de inventario disponible.'
        },
        {
          name: 'Liderazgo',
          context: 'Demostrado en la toma de decisiones autónoma y la conducción de su emprendimiento.'
        },
        {
          name: 'Proactividad',
          context: 'Iniciativa para resolver imprevistos y buscar oportunidades de mejora en el servicio.'
        },
        {
          name: 'Trabajo en Equipo',
          context: 'Colaboración efectiva en proyectos universitarios y coordinación con aliados locales.'
        }
      ]
    },
    {
      categoryName: 'Gestión Comercial y Atención al Cliente',
      description: 'Capacidad demostrada en el trato directo y la satisfacción del usuario.',
      skills: [
        {
          name: 'Atención al Cliente',
          context: 'Asesoramiento personalizado, resolución de dudas y fidelización de clientela.'
        },
        {
          name: 'Comunicación Efectiva',
          context: 'Claridad en la transmisión de mensajes comerciales y respuesta rápida a consultas.'
        },
        {
          name: 'Marketing Digital Local',
          context: 'Gestión de presencia en plataformas sociales para conectar con la comunidad.'
        }
      ]
    },
    {
      categoryName: 'Herramientas Digitales y Ofimática',
      description: 'Niveles declarados con total transparencia en el CV.',
      skills: [
        {
          name: 'Microsoft Word',
          levelDeclared: 'Nivel Básico',
          context: 'Elaboración de documentos administrativos, notas y reportes textuales.'
        },
        {
          name: 'Microsoft Excel',
          levelDeclared: 'Nivel Básico',
          context: 'Registro de listas de precios, compras y control elemental de inventarios.'
        },
        {
          name: 'Herramientas Digitales y Redes Sociales',
          levelDeclared: 'Nivel Básico',
          context: 'Gestión de publicaciones, historias y catálogos en plataformas digitales.'
        }
      ]
    }
  ];

  private readonly languages: LanguageSkill[] = [
    {
      language: 'Español',
      level: 'Nativo',
      details: 'Dominio fluido para redacción profesional, negociación y atención al público.'
    },
    {
      language: 'Inglés',
      level: 'Nivel Básico',
      details: 'Competencia inicial con vocación de fortalecimiento para el ámbito de negocios internacionales.'
    }
  ];

  private readonly caseStudies: CaseStudy[] = [
    {
      id: 'caso-planificacion-compras',
      title: 'Planificación de Compras y Surtido en Johari Shop Beauty',
      area: 'Compras e Inventario',
      status: 'documentado',
      context: 'Gestión de una tienda minorista de belleza y cuidado personal en Trujillo, con rotación continua de productos.',
      objective: 'Mantener la disponibilidad de productos clave para los clientes evitando la inmovilización excesiva de capital.',
      roleContribution: 'Ariana lideró la revisión periódica del movimiento de productos y la selección de pedidos a proveedores locales.',
      actionsTaken: [
        'Registro de productos de mayor consulta y rotación periódica.',
        'Establecimiento de frecuencias de compra basadas en la demanda observable.',
        'Coordinación directa con proveedores para asegurar tiempos oportunos de entrega.'
      ],
      toolsUsed: ['Hojas de cálculo básicas (MS Excel)', 'Listados de compras y control manual'],
      learningsAndResults: 'Desarrollo de criterio para priorizar productos de alta rotación, orden administrativo y cuidado del flujo de caja operativo.'
    },
    {
      id: 'caso-marketing-redes',
      title: 'Promoción de Productos y Posicionamiento Local en Redes Sociales',
      area: 'Comercial y Redes Sociales',
      status: 'documentado',
      context: 'Necesidad de visibilizar la propuesta de valor y las novedades del catálogo de Johari Shop Beauty ante clientes de Trujillo.',
      objective: 'Generar cercanía con el público objetivo local e incentivar la consulta y adquisición de productos.',
      roleContribution: 'Planificación de las publicaciones de catálogo, presentación visual del producto y atención inmediata de mensajes entrantes.',
      actionsTaken: [
        'Creación de contenido visual de productos en stock y novedades.',
        'Publicación regular en plataformas sociales con información clara de precios y características.',
        'Atención rápida y cordial a las consultas recibidas por canales digitales.'
      ],
      toolsUsed: ['Plataformas de redes sociales', 'Herramientas digitales de mensajería'],
      learningsAndResults: 'Comprensión práctica del embudo de atención comercial: desde la visualización de un post hasta la confirmación de la venta.'
    },
    {
      id: 'caso-atencion-cliente',
      title: 'Protocolo de Atención Personalizada y Fidelización',
      area: 'Servicio al Cliente',
      status: 'documentado',
      context: 'En el sector de belleza, la confianza del consumidor depende del asesoramiento oportuno y la escucha activa.',
      objective: 'Asegurar una experiencia de compra satisfactoria que motive la recomendación y la recurrencia.',
      roleContribution: 'Diseño e implementación del trato directo y seguimiento con cada cliente.',
      actionsTaken: [
        'Escucha activa de necesidades particulares de cuidado personal y preferencias de los clientes.',
        'Recomendaciones honestas de productos adecuadas a cada consulta.',
        'Seguimiento posterior a la compra para verificar satisfacción del cliente.'
      ],
      toolsUsed: ['Atención directa presencial', 'Canales de mensajería instantánea'],
      learningsAndResults: 'Consolidación de habilidades interpersonales, empatía comercial y entendimiento del valor de la lealtad del cliente.'
    }
  ];

  getProfile(): ProfileSummary {
    return this.profile;
  }

  getExperiences(): WorkExperience[] {
    return this.experiences;
  }

  getEducation(): AcademicEducation[] {
    return this.education;
  }

  getInternationalExperiences(): InternationalExperience[] {
    return this.internationalExperiences;
  }

  getSkillCategories(): SkillCategory[] {
    return this.skillCategories;
  }

  getLanguages(): LanguageSkill[] {
    return this.languages;
  }

  getCaseStudies(): CaseStudy[] {
    return this.caseStudies;
  }
}
