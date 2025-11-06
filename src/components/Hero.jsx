import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [typedText, setTypedText] = useState('');
  const fullText = t.hero.typingText;
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    // Reset typing when language changes
    setTypedText('');
    setCharIndex(0);
    setIsDeleting(false);
  }, [language]);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < fullText.length) {
        setTypedText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(fullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (charIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (charIndex === 0 && isDeleting) {
        setIsDeleting(false);
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, isDeleting, fullText]);

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/moustapha-aden', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/moustapha-aden-diriyeh-344569225/', label: 'LinkedIn' },
    { icon: FaEnvelope, url: 'mailto:moustaphaaden232020@gmail.com', label: 'Email' },
    { icon: FaTwitter, url: 'https://x.com/MoustaphaA253', label: 'Twitter' },
  ];

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <img 
                src="/images/profil.jpg" 
                alt="Moustapha Aden" 
                className="hero-profile-image"
                onError={(e) => {
                  // Si l'image n'existe pas, utiliser une image placeholder
                  e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80";
                }}
              />
            </div>
          </div>
          <div className="hero-text">
            <h1 className="hero-title">
              {t.hero.greeting} <span className="highlight">{t.hero.name}</span>!
            </h1>
            <div className="typing-container">
              <span className="typing-text">
                {typedText}
                <span className="cursor">|</span>
              </span>
            </div>
            <p className="hero-subtitle">
              {t.hero.subtitle}
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <a
                  href="https://github.com/moustapha-aden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stat-badge-link"
                >
                  <img
                    src="https://img.shields.io/github/followers/moustapha-aden?style=for-the-badge&logo=github&logoColor=white&labelColor=24292e&color=0366d6"
                    alt="GitHub followers"
                    className="stat-badge"
                  />
                </a>
              </div>
              <div className="stat-item">
                <a
                  href="https://github.com/moustapha-aden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stat-badge-link"
                >
                  <img
                    src="https://img.shields.io/github/stars/moustapha-aden?style=for-the-badge&logo=github&logoColor=white&labelColor=24292e&color=0366d6"
                    alt="GitHub stars"
                    className="stat-badge"
                  />
                </a>
              </div>
              <div className="stat-item">
                <a
                  href="https://github.com/moustapha-aden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stat-badge-link"
                >
                  <img
                    src="https://komarev.com/ghpvc/?username=moustapha-aden&style=for-the-badge&color=0366d6"
                    alt="Profile Views"
                    className="stat-badge"
                  />
                </a>
              </div>
            </div>
            <div className="hero-social">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.label}
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

