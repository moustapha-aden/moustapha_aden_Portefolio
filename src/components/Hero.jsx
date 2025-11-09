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
  }, [charIndex, isDeleting, fullText]);

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/moustapha-aden', label: 'GitHub', color: '#181717' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/moustapha-aden-diriyeh-344569225/', label: 'LinkedIn', color: '#0077B5' },
    { icon: FaEnvelope, url: 'mailto:moustaphaaden232020@gmail.com', label: 'Email', color: '#EA4335' },
    { icon: FaTwitter, url: 'https://x.com/MoustaphaA253', label: 'Twitter', color: '#1DA1F2' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-32 pb-16 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center gap-16 flex-wrap">
          <div className="flex-shrink-0">
            <div className="relative w-[300px] h-[300px] mx-auto mb-8">
              <img 
                src="/images/Profile.jpg" 
                alt="Moustapha Aden" 
                className="w-full h-full object-cover rounded-full border-[5px] border-white/30 shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 animate-float hover:scale-105 hover:shadow-[0_25px_70px_rgba(0,0,0,0.4)]"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80";
                }}
              />
            </div>
          </div>
          <div className="flex-1 min-w-[300px] text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
              {t.hero.greeting} <span className="text-white font-black">{t.hero.name}</span>!
            </h1>
            <div className="min-h-[60px] flex items-center justify-center my-6">
              <span className="text-2xl font-medium">
                {typedText}
                <span className="animate-blink text-white">|</span>
              </span>
            </div>
            <p className="text-xl mb-8 opacity-90">
              {t.hero.subtitle}
            </p>
            <div className="flex justify-center gap-12 my-8 flex-wrap">
              <div className="text-center flex justify-center">
                <a
                  href="https://github.com/moustapha-aden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-all duration-300 hover:-translate-y-1 hover:opacity-90"
                >
                  <img
                    src="https://img.shields.io/github/followers/moustapha-aden?style=for-the-badge&logo=github&logoColor=white&labelColor=24292e&color=0366d6&cacheSeconds=60"
                    alt="GitHub followers"
                    className="h-7 block"
                  />
                </a>
              </div>
              <div className="text-center flex justify-center">
                <a
                  href="https://github.com/moustapha-aden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-all duration-300 hover:-translate-y-1 hover:opacity-90"
                >
                  <img
                    src="https://img.shields.io/github/stars/moustapha-aden?style=for-the-badge&logo=github&logoColor=white&labelColor=24292e&color=0366d6"
                    alt="GitHub stars"
                    className="h-7 block"
                  />
                </a>
              </div>
              <div className="text-center flex justify-center">
                <a
                  href="https://github.com/moustapha-aden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-all duration-300 hover:-translate-y-1 hover:opacity-90"
                >
                  <img
                    src="https://komarev.com/ghpvc/?username=moustapha-aden&style=for-the-badge&color=0366d6"
                    alt="Profile Views"
                    className="h-7 block"
                  />
                </a>
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label={link.label}
                  style={{ 
                    '--social-color': link.color,
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="social-icon-wrapper">
                    <link.icon className="social-icon" />
                    <div className="social-icon-glow" style={{ backgroundColor: link.color }}></div>
                  </div>
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
