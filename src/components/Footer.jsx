import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-black text-white py-8 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-base mb-2">
          © {currentYear} Moustapha Aden. Built with React & ❤️
        </p>
        <p className="text-sm opacity-70">
          {t.footer.text}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
