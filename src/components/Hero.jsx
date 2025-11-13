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

  // Timestamp pour forcer le refresh des badges GitHub toutes les 60 secondes
  const [timestamp, setTimestamp] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => setTimestamp(Date.now()), 60000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/moustapha-aden', label: 'GitHub', color: '#181717' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/moustapha-aden-diriyeh-344569225/', label: 'LinkedIn', color: '#0077B5' },
    { icon: FaEnvelope, url: 'mailto:moustaphaaden232020@gmail.com', label: 'Email', color: '#EA4335' },
    { icon: FaTwitter, url: 'https://x.com/MoustaphaA253', label: 'Twitter', color: '#1DA1F2' },
  ];

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

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-32 pb-16 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
        {/* Photo */}
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

        {/* Texte & badges */}
        <div className="flex-1 min-w-[300px] text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            {t.hero.greeting} <span className="text-white font-black">{t.hero.name}</span>!
          </h1>

          <div className="min-h-[60px] flex items-center justify-center md:justify-start my-6">
            <span className="text-2xl font-medium">
              {typedText}
              <span className="animate-blink text-white">|</span>
            </span>
          </div>

          <p className="text-xl mb-8 opacity-90">
            {t.hero.subtitle}
          </p>

          {/* GitHub badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
            <a href="https://github.com/moustapha-aden" target="_blank" rel="noopener noreferrer">
              <img
                src={`https://img.shields.io/github/followers/moustapha-aden?style=for-the-badge&logo=github&logoColor=white&labelColor=24292e&color=0366d6&cacheSeconds=60&t=${timestamp}`}
                alt="GitHub followers"
                className="h-8"
              />
            </a>
            <a href="https://github.com/moustapha-aden" target="_blank" rel="noopener noreferrer">
              <img
                src={`https://img.shields.io/github/stars/moustapha-aden?style=for-the-badge&logo=github&logoColor=white&labelColor=24292e&color=0366d6&t=${timestamp}`}
                alt="GitHub stars"
                className="h-8"
              />
            </a>
            <a href="https://github.com/moustapha-aden" target="_blank" rel="noopener noreferrer">
              <img
                src={`https://komarev.com/ghpvc/?username=moustapha-aden&style=for-the-badge&color=0366d6&t=${timestamp}`}
                alt="Profile Views"
                className="h-8"
              />
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center md:justify-start gap-6 mt-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="transition-transform transform hover:-translate-y-1"
                style={{ color: link.color }}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
