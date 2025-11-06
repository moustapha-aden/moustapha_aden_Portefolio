import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © {currentYear} Moustapha Aden. Built with React & ❤️
        </p>
        <p className="footer-subtext">
          {t.footer.text}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
