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
    <section id="contact" className="contact py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t.contact.title}
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 text-lg mb-12">
          {t.contact.subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-8 rounded-xl text-center shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 text-gray-900 dark:text-white no-underline hover:-translate-y-1 hover:shadow-lg hover:border-black dark:hover:border-white hover:bg-gray-100 dark:hover:bg-gray-700"
              style={{ '--contact-color': contact.color }}
            >
              <contact.icon 
                className="text-5xl mb-4 transition-all duration-300" 
                style={{ color: contact.color }}
              />
              <h3 className="text-2xl mb-2 text-gray-900 dark:text-white">{contact.label}</h3>
              <p className="text-gray-600 dark:text-gray-300">{contact.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
