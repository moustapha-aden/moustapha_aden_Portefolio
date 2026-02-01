import { useState, useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';
import { translations } from '../translations';

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [visibleProjects, setVisibleProjects] = useState([]);
  const projectsRef = useRef([]);
  const sectionRef = useRef(null);
  const [titleRef, isTitleInView] = useInView({ threshold: 0.2 });

  const projects = [
    {
      id: 1,
      name: "GEFD-Project",
      description: {
        fr: "Plateforme de guide Ecampus France - Plateforme pour guider les étudiants djiboutiens dans leurs inscriptions au programme des études supérieures en France, bourses et demandes.",
        en: "Ecampus France Guide Platform - Platform to guide Djiboutian students through their applications for higher education in France, scholarships and requests."
      },
      image: "images/GEFD.png",
      tags: ["Next.js", "TypeScript"],
      github: "https://github.com/moustapha-aden/GEFD-Project",
      demo: "https://gefd-project.vercel.app"
    },
    {
      id: 2,
      name: "DawaDrop",
      description: {
        fr: "Service de livraison de médicaments - Plateforme de livraison de médicaments avec gestion des commandes, suivi en temps réel et interface moderne.",
        en: "Medication Delivery Service - Medication delivery platform with order management, real-time tracking and modern interface."
      },
      image: "images/dawadrop.png",
      tags: ["Laravel", "React", "MySQL"],
      github: "https://github.com/moustapha-aden/DawaDrop",
      demo: "https://dawadrop-02zaq.sevalla.app/"
      
    },
    {
      id: 3,
      name: "Sakinah",
      description: {
        fr: "Application mobile invocations islamiques - Application dédiée aux invocations et adkâr islamiques pour faciliter l'accès aux invocations authentiques au quotidien.",
        en: "Islamic Invocations Mobile App - App dedicated to Islamic invocations and adkâr to facilitate access to authentic invocations in daily life."
      },
      image: "images/sakinah.png",
      tags: ["React Native", "TypeScript", "Expo"],
      github: "https://github.com/moustapha-aden/sakinah"
    },
    {
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const projectId = parseInt(entry.target.dataset.projectId);
          setVisibleProjects((prev) => {
            if (!prev.includes(projectId)) {
              return [...prev, projectId];
            }
            return prev;
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Use setTimeout to ensure refs are set after render
    const timeoutId = setTimeout(() => {
      projectsRef.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      projectsRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <h2 
          ref={titleRef}
          className={`section-title text-center transition-all duration-700 ${isTitleInView ? 'opacity-100 translate-y-0 revealed' : 'opacity-0 -translate-y-6'}`}
        >
          {t.projects.title}
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => {
            const isVisible = visibleProjects.includes(project.id);
            return (
              <div
                key={project.id}
                ref={(el) => (projectsRef.current[index] = el)}
                data-project-id={project.id}
                className={`project-card ${isVisible ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://picsum.photos/seed/${project.id}-${project.name}/800/500`;
                    }}
                    loading="lazy"
                  />
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
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={t.projects.viewDemo}
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description[language]}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="project-tag"
                        style={{ animationDelay: `${(index * 0.15) + (tagIndex * 0.1) + 0.3}s` }}
                      >
                        {tag}
                      </span>
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
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn demo-btn"
                      >
                        <FaExternalLinkAlt /> {t.projects.viewDemo}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

