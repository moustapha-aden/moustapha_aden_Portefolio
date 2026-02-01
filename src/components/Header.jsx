import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { translations } from '../translations';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[language];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'about', label: t.nav.about },
    { id: 'projects', label: t.nav.projects },
    { id: 'tech', label: t.nav.tech },
    { id: 'goals', label: t.nav.goals },
    { id: 'contact', label: t.nav.contact },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[1000] backdrop-blur-md border-b transition-all duration-500 ease-out ${
      theme === 'dark' ? 'bg-black/95 border-gray-800' : 'bg-white/95 border-gray-200'
    } ${isScrolled ? 'shadow-md' : ''} ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <div className="logo">
            <a href="#hero">
              <span className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">
                Moustapha Aden
              </span>
            </a>
          </div>
          <nav className={`hidden md:flex gap-8 items-center`}>
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className="relative text-gray-900 dark:text-white font-medium transition-all duration-300 hover:text-black dark:hover:text-white group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button
              className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-lg font-semibold text-base cursor-pointer transition-all duration-300 flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-black dark:hover:border-white hover:-translate-y-0.5 hover:shadow-md"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={theme === 'light' ? 'Mode sombre' : 'Mode clair'}
            >
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
            <button
              className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-lg font-semibold text-sm cursor-pointer transition-all duration-300 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-black dark:hover:border-white hover:-translate-y-0.5 hover:shadow-md"
              onClick={toggleLanguage}
              aria-label="Toggle language"
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </button>
            <button
              className="md:hidden bg-transparent border-none text-2xl text-gray-900 dark:text-white cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <nav className={`md:hidden fixed top-[70px] left-0 right-0 bg-white dark:bg-black flex flex-col p-8 shadow-lg border-b border-gray-200 dark:border-gray-800 transition-transform duration-300 ease-out ${
        isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'
      }`}>
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.id);
            }}
            className="block py-2 text-gray-900 dark:text-white font-medium transition-colors hover:text-black dark:hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
