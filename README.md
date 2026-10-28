# Portafolio Profesional — Ariana Guadalupe Cruzado Cotrina

Sitio web profesional y portafolio virtual diseñado para **Ariana Guadalupe Cruzado Cotrina**, estudiante de **Administración y Negocios Internacionales** en la Universidad Privada del Norte (UPN) y propietaria de **Johari Shop Beauty**.

> **Nota de enfoque profesional:** Este sitio ha sido diseñado exclusivamente para destacar competencias de gestión empresarial, administración, servicio al cliente, compras y visión de negocios. La arquitectura técnica no atribuye habilidades de programación a Ariana, sino que funciona como una herramienta de presentación ejecutiva.

---

## 📁 Estructura del Proyecto

El código está estructurado bajo principios de separación de responsabilidades (SRP) y desacoplamiento de datos (DIP):

```text
portafolio-ariana-cruzado/
├── public/
│   ├── assets/
│   │   ├── docs/                   # Documentos PDF (ej. CV-Ariana-Cruzado.pdf)
│   │   └── images/                 # Recursos gráficos y fotografías
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── models/
│   │   │   │   └── profile.model.ts        # Tipado TypeScript de datos y contenidos
│   │   │   └── services/
│   │   │       ├── content.service.ts      # Token e interfaz del repositorio de contenidos
│   │   │       └── profile-data.service.ts # INFORMACIÓN CENTRAL: Textos y datos del CV
│   │   ├── features/
│   │   │   ├── hero/                       # Presentación e impacto inicial
│   │   │   ├── about/                      # Sección "Sobre mí" y pilares de trabajo
│   │   │   ├── experience/                 # Experiencia en Johari Shop Beauty
│   │   │   ├── case-studies/               # Casos prácticos y metodología de gestión
│   │   │   ├── education/                  # Educación superior y proyección internacional
│   │   │   ├── skills/                     # Competencias, herramientas e idiomas
│   │   │   └── contact/                    # Canales de comunicación y aviso de privacidad
│   │   └── shared/
│   │       └── components/
│   │           ├── header/                 # Barra de navegación accesible y responsiva
│   │           └── footer/                 # Pie de página institucional
│   ├── styles/
│   │   ├── _variables.scss                 # Tokens de diseño (paleta marfil, azul marino, oro)
│   │   └── _mixins.scss                    # Utilidades de accesibilidad y media queries
│   ├── index.html                          # Metaetiquetas SEO y accesibilidad en español
│   ├── main.ts                             # Inicialización de la aplicación Angular 19
│   └── styles.scss                         # Tipografías y reset global
├── angular.json                            # Configuración de compilación y presupuestos
└── package.json                            # Dependencias y scripts de ejecución
```

---

## 🛠️ Cómo Actualizar el Contenido (Para quien mantenga el sitio)

Todo el contenido textual está centralizado en un único archivo:  
[`src/app/core/services/profile-data.service.ts`](src/app/core/services/profile-data.service.ts).

**No es necesario modificar plantillas HTML ni estilos SCSS para actualizar información básica:**

1. **Actualizar ciclo académico o estado:**
   - Buscar la propiedad `education` y modificar el campo `status` (ej. cambiar `'8.º ciclo académico registrado'` por `'9.º ciclo'` o `'Egresada'`).
2. **Añadir un nuevo certificado o curso:**
   - En la sección `internationalExperiences`, agregar un nuevo objeto con los campos `title`, `type`, `destination`, `period`, `description` y `competencies`.
3. **Incorporar nuevas evidencias o casos prácticos:**
   - En el arreglo `caseStudies`, editar los casos existentes o añadir uno nuevo completando `title`, `context`, `objective`, `roleContribution`, `actionsTaken`, `toolsUsed` y `learningsAndResults`.
4. **Actualizar el archivo descargable de CV:**
   - Guardar el nuevo PDF en `public/assets/docs/CV-Ariana-Cruzado.pdf`. Asegurarse de mantener el mismo nombre de archivo para no romper los enlaces de descarga.

---

## 🔒 Privacidad y Datos Sensibles

Por protección de datos personales en entornos web abiertos:
- **No publicar:** DNI, dirección domiciliaria exacta, datos de cuentas bancarias ni firmas digitalizadas.
- **Teléfono móvil:** En el CV figura el número de Ariana. Por seguridad se ha mantenido privado en la web, reservándose para los procesos de selección formales tras el primer contacto vía correo electrónico (`arianitacruzado20@gmail.com`).
- **Muestras comerciales:** Toda evidencia o captura de pantallas de compras o ventas de *Johari Shop Beauty* debe contar con datos de clientes anonimizados.

---

## 🌐 Comparativa de Publicación: GitHub Pages vs. Vercel

Antes del despliegue público, se evaluaron las dos opciones gratuitas líderes del mercado:

| Criterio | GitHub Pages | Vercel (Recomendado) |
| :--- | :--- | :--- |
| **Tipo de despliegue** | Servidor estático tradicional. Requiere configurar ruta base (`base-href`). | Edge Network global optimizada con detección automática de Angular. |
| **Gestión de rutas** | En recargas de páginas secundarias requiere truco `404.html`. | Soporta reescrituras nativas mediante `vercel.json` de manera transparente. |
| **Certificado SSL / HTTPS** | Automático y gratuito con dominio `usuario.github.io`. | Automático y gratuito con dominio `proyecto.vercel.app` o dominio propio. |
| **Integración Continua (CI/CD)** | Requiere GitHub Actions personalizado (`.github/workflows/deploy.yml`). | Integración nativa inmediata: cada `git push` genera un despliegue y vista previa. |
| **Complejidad de uso** | Media (adecuada para repositorios públicos de código abierto). | Muy baja (ideal para portafolios profesionales y clientes no técnicos). |

### Recomendación:
- **Vercel** es la opción preferida por su simplicidad de mantenimiento, rendimiento de carga superior y despliegues automáticos sin configuración adicional de pipelines.
- Si se prefiere mantener todo dentro del ecosistema de GitHub sin servicios de terceros, **GitHub Pages** es una alternativa 100% viable compilando con `ng build --base-href /<nombre-del-repo>/`.

---

## 🚀 Comandos para Desarrollo y Compilación

### 1. Ejecutar localmente
```bash
npm install
npm start
```
Abrir el navegador en `http://localhost:4200/`.

### 2. Compilar para producción
```bash
npm run build
```
Los archivos optimizados y minificados se generarán en la carpeta `dist/portafolio-ariana-cruzado/browser/`.
