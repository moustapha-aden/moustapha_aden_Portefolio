import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const contacts = [
    { 
      icon: FaGithub, 
      url: 'https://github.com/moustapha-aden', 
      label: 'GitHub',
      text: t.contact.github,
      color: '#181717'
    },
    { 
      icon: FaLinkedin, 
      url: 'https://www.linkedin.com/in/moustapha-aden-diriyeh-344569225/', 
      label: 'LinkedIn',
      text: t.contact.linkedin,
      color: '#0077B5'
    },
    { 
      icon: FaEnvelope, 
      url: 'mailto:moustaphaaden232020@gmail.com', 
      label: 'Email',
      text: t.contact.email,
      color: '#EA4335'
    },
    { 
      icon: FaTwitter, 
      url: 'https://x.com/MoustaphaA253', 
      label: 'Twitter',
      text: t.contact.twitter,
      color: '#1DA1F2'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="contact-subtitle">
          {t.contact.subtitle}
        </p>
        <div className="contact-grid">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              style={{ '--contact-color': contact.color }}
            >
              <contact.icon className="contact-icon" />
              <h3>{contact.label}</h3>
              <p>{contact.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
