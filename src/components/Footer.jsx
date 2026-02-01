import { useLanguage } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';
import { translations } from '../translations';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <footer ref={ref} className="bg-black text-white py-8 text-center overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className={`text-base mb-2 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          © {currentYear} Moustapha Aden. Built with React & ❤️
        </p>
        <p className={`text-sm opacity-70 transition-all duration-700 ${isInView ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: isInView ? '150ms' : '0ms' }}>
          {t.footer.text}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
