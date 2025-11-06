import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const profile = {
    role: {
      fr: "Développeur Full Stack & Passionné de Cybersécurité",
      en: "Full Stack Developer & Cybersecurity Enthusiast"
    },
    location: "Djibouti 🇩🇯",
    education: {
      fr: "Diplômé en Génie Logiciel",
      en: "Software Engineering Graduate"
    },
    languages: {
      fr: ["Français", "Arabe", "Somali", "Anglais"],
      en: ["French", "Arabic", "Somali", "English"]
    },
    currentFocus: ["Laravel", "React", "React Native", "Python", "Cybersecurity"],
    interests: {
      fr: ["Développement Web", "Application Mobile", "Automatisation", "Open Source"],
      en: ["Web Development", "Mobile Application", "Automation", "Open Source"]
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">{t.about.title}</h2>
        <div className="about-content">
          <div className="code-block">
            <div className="code-header">
              <span className="code-dot red"></span>
              <span className="code-dot yellow"></span>
              <span className="code-dot green"></span>
              <span className="code-title">moustapha.js</span>
            </div>
            <pre className="code-content">
{`const moustapha = {
  role: "${profile.role[language]}",
  location: "${profile.location}",
  education: "${profile.education[language]}",
  languages: [${profile.languages[language].map(l => `"${l}"`).join(", ")}],
  currentFocus: [${profile.currentFocus.map(f => `"${f}"`).join(", ")}],
  interests: [${profile.interests[language].map(i => `"${i}"`).join(", ")}],
  funFact: "${language === 'fr' ? 'J\'adore automatiser tout ce que je peux ! 🤖' : 'I love automating everything I can! 🤖'}"
};`}
            </pre>
          </div>
          <div className="about-text">
            <p dangerouslySetInnerHTML={{ __html: t.about.description1 }} />
            <p dangerouslySetInnerHTML={{ __html: t.about.description2 }} />
            <p className="fun-fact" dangerouslySetInnerHTML={{ __html: t.about.funFact }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
