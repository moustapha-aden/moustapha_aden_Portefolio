import { FaGithub } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const projects = [
    {
      id: 1,
      name: "CertiCarte",
      description: {
        fr: "Système de gestion de certifications - Gestion complète des certifications avec suivi, validation et génération de certificats numériques.",
        en: "Certification Management System - Complete certification management with tracking, validation and digital certificate generation."
      },
      image: "images/Certicart.jpg",
      tags: ["Laravel", "React", "MySQL"],
      github: "https://github.com/moustapha-aden/CertiCarte"
    },
    {
      id: 2,
      name: "Site-de-publicité",
      description: {
        fr: "Plateforme publicitaire moderne - Plateforme moderne de gestion publicitaire avec système de paiement intégré et analytics avancés.",
        en: "Modern Advertising Platform - Modern advertising management platform with integrated payment system and advanced analytics."
      },
      image: "images/Publicite.jpg",
      tags: ["React", "Laravel", "Tailwind"],
      github: "https://github.com/moustapha-aden/Site-de-publicite/"
    },
    {
      id: 3,
      name: "PrintManager",
      description: {
        fr: "Système de gestion des travaux d'impression - Système de gestion des travaux d'impression avec suivi en temps réel et notifications.",
        en: "Print Job Management System - Print job management system with real-time tracking and notifications."
      },
      image: "images/PrintManager.png",
      tags: ["Laravel", "React", "MySQL"],
      github: "https://github.com/moustapha-aden/PrintManager"
    },
    {
      id: 4,
      name: "Clinique dentaire",
      description: {
        fr: "Site web de clinique dentaire - Site web moderne pour une clinique dentaire avec prise de rendez-vous en ligne, gestion des patients et présentation des services.",
        en: "Dental Clinic Website - Modern website for a dental clinic with online appointment booking, patient management and services presentation."
      },
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=500&fit=crop&q=80",
      tags: ["HTML", "CSS", "PHP"],
      github: "https://github.com/moustapha-aden/clinique-dentaire"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">{t.projects.title}</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.name} />
                <div className="project-overlay">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="View on GitHub"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description[language]}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn github-btn"
                  >
                    <FaGithub /> {t.projects.code}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

