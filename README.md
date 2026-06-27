# Anthon Miguel Ponce - Senior Developer & Designer Portfolio

Welcome to my professional developer portfolio. This is a high-fidelity, premium website designed to showcase my capabilities, full-stack projects, and credentials. Built with a bespoke luxury aesthetic featuring ambient radial backgrounds, glassmorphic card flows, and smooth interactive animations.

---

## 📂 Repository Directory Structure

```text
portfolio/
├── assets/                          # All static visual assets and media
│   ├── projects/                    # Project mockups, screenshots, and logos
│   │   ├── evolve_by_cams.png
│   │   ├── khenzo logo.jpg
│   │   ├── komunitrade.png
│   │   ├── machine-portal.png
│   │   ├── maharlika_republic.png
│   │   ├── myLogo.png
│   │   ├── Sensestroke.png
│   │   └── VITALINK.png
│   ├── certificates/                # Professional credentials and exam certificates
│   │   ├── AWS_Cloud_Foundations_Certificate.png
│   │   ├── Certiport_Java_Certificate.png
│   │   ├── Coursera_*.png           # (16 Coursera verification badges)
│   │   ├── aws-academy-graduate-cloud-foundations-training-bad.png
│   │   └── it-specialist-java.png
│   └── Photoprof.png                # Profile headshot picture
│
├── index.html                       # Core structure and layout config
├── style.css                        # Luxury dark-ambient styling system (CSS Variables)
├── script.js                        # Animation triggers, modals, scroll spy, mode toggle
├── projects.js                      # Static database array for all projects
├── certificates.js                  # Static database array for all certificates
├── README.md                        # Documentation of the project structure
└── package-lock.json                # Project environment metadata
```

---

## 🛠️ How to Update Content

The data is separated from the code logic, making it extremely simple to add or modify items:

### Adding or Modifying Projects
Open `projects.js` and add a new object to the `projectsData` array:
```javascript
{
  id: "project-unique-id",
  title: "Project Title",
  subtitle: "Brief Catchy Subtitle",
  shortDescription: "Short card description",
  longDescription: "Detailed paragraphs displayed inside the interactive modal popup.",
  tech: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
  image: "assets/projects/your_project_screenshot.png",  // Place screenshot in assets/projects/
  demoUrl: "https://your-demo-url.com",
  githubUrl: "https://github.com/yourusername/repo",
  category: "web"  // Categories: 'web', 'ai', or 'desktop'
}
```

### Adding or Modifying Certificates
Open `certificates.js` and add a new object to the `certificatesData` array:
```javascript
{
  id: "cert-unique-id",
  title: "Certificate Name",
  issuer: "Issuing Organization",
  date: "Month Year",
  description: "Description of skills/objectives covered in the exam.",
  image: "assets/certificates/your_certificate_badge.png",  // Place badge in assets/certificates/
  verifyUrl: "https://verify-link.com",
  category: "development"  // Categories: 'development' or 'language'
}
```

---

## 🎨 Design System & Technologies

* **Typography**: Headings: `Outfit` (sans-serif), Body: `Plus Jakarta Sans` (sans-serif)
* **Backgrounds**: Slow-moving ambient HSL radial gradient backgrounds.
* **Cards**: Premium glassmorphic backdrop blurs (`backdrop-filter`) with gradient borders and hover-activated neon glows.
* **Features**:
  * Light/Dark mode toggling with local storage memory persistence.
  * Intersection-observed fade-up scrolling animations.
  * Dynamic filtering on projects and credentials.
  * Fully responsive interactive modal drawers and image lightboxes.
