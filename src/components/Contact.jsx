import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';
import { translations } from '../translations';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

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
    <section id="contact" ref={sectionRef} className="contact py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className={`section-title-reveal text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0 revealed' : 'opacity-0 -translate-y-6'}`}>
          {t.contact.title}
        </h2>
        <p className={`text-center text-gray-600 dark:text-gray-300 text-lg mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: isInView ? '0.1s' : '0s' }}>
          {t.contact.subtitle}
        </p>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: isInView ? '0.2s' : '0s' }}>
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`contact-card-animate bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-600 text-gray-900 dark:text-white no-underline hover:-translate-y-2 hover:shadow-xl hover:border-black dark:hover:border-white hover:bg-gray-100 dark:hover:bg-gray-700 flex flex-col items-center justify-center text-center ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ '--contact-color': contact.color, transitionDelay: isInView ? `${200 + index * 100}ms` : '0ms' }}
            >
              <span className="contact-icon-wrapper flex items-center justify-center w-full mb-4">
                <contact.icon 
                  className="text-5xl transition-all duration-300"
                  style={{ color: contact.color }}
                  aria-hidden
                />
              </span>
              <h3 className="text-2xl mb-2 text-gray-900 dark:text-white w-full text-center">{contact.label}</h3>
              <p className="text-gray-600 dark:text-gray-300 w-full text-center">{contact.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
