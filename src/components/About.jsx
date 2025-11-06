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
      fr: "Diplômé en Informatique",
      en: "Graduate in Computer Science"
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
    <section id="about" className="about py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t.about.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-[#1E1E1E] rounded-xl overflow-hidden shadow-xl">
            <div className="flex items-center gap-2 p-4 bg-[#2D2D2D]">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]"></span>
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
              <span className="w-3 h-3 rounded-full bg-[#27C93F]"></span>
              <span className="text-gray-400 text-sm ml-4">moustapha.js</span>
            </div>
            <pre className="p-6 text-[#D4D4D4] font-mono text-sm leading-relaxed m-0 overflow-x-auto">
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
          <div className="text-gray-600 dark:text-gray-300">
            <p className="mb-6 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.description1 }} />
            <p className="mb-6 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.description2 }} />
            <div className="bg-black dark:bg-black text-white p-6 rounded-xl mt-8 border-2 border-black dark:border-black">
              <p dangerouslySetInnerHTML={{ __html: t.about.funFact }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
