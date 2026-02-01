import { useLanguage } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';
import { translations } from '../translations';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [sectionRef, isInView] = useInView({ threshold: 0.15 });
const profile = {
  role: {
    fr: "Développeur Full Stack junior orienté Web, Mobile & Cybersécurité",
    en: "Junior Full Stack Developer focused on Web, Mobile & Cybersecurity"
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
  currentFocus: {
    fr: [
      "Laravel",
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Python",
      "Sécurité des API",
      "Automatisation"
    ],
    en: [
      "Laravel",
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Python",
      "API Security",
      "Automation"
    ]
  },
  interests: {
    fr: [
      "Développement Web",
      "Applications mobiles",
      "Automatisation",
      "Open Source",
      "Cybersécurité"
    ],
    en: [
      "Web Development",
      "Mobile Applications",
      "Automation",
      "Open Source",
      "Cybersecurity"
    ]
  },
  funFact: {
    fr: "Si une tâche se répète, je l’automatise.",
    en: "If a task is repeated, I automate it."
  }
};


  return (
    <section id="about" ref={sectionRef} className="about py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className={`section-title-reveal text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0 revealed' : 'opacity-0 -translate-y-6'}`} style={{ transitionDelay: '0ms' }}>
          {t.about.title}
        </h2>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)', transitionDelay: isInView ? '150ms' : '0ms' }}>
          <div className={`bg-gray-100 dark:bg-[#1E1E1E] rounded-xl overflow-hidden shadow-xl tech-card-animate transition-all duration-700 border border-gray-200 dark:border-transparent ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: isInView ? '250ms' : '0ms' }}>
            <div className="flex items-center gap-2 p-4 bg-gray-200 dark:bg-[#2D2D2D]">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]"></span>
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
              <span className="w-3 h-3 rounded-full bg-[#27C93F]"></span>
              <span className="text-gray-600 dark:text-gray-400 text-sm ml-4">moustapha.js</span>
            </div>
            <pre className="p-6 text-gray-800 dark:text-[#D4D4D4] font-mono text-sm leading-relaxed m-0 overflow-x-auto">
{`const moustapha = {
  role: "${profile.role[language]}",
  location: "${profile.location}",
  education: "${profile.education[language]}",
  languages: [${profile.languages[language].map(l => `"${l}"`).join(", ")}],
  currentFocus: [${(profile.currentFocus[language] || []).map(f => `"${f}"`).join(", ")}],
  interests: [${profile.interests[language].map(i => `"${i}"`).join(", ")}],
  funFact: "${language === 'fr' ? 'J\'adore automatiser tout ce que je peux ! 🤖' : 'I love automating everything I can! 🤖'}"
};`}
            </pre>
          </div>
          <div className={`text-gray-600 dark:text-gray-300 tech-card-animate transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: isInView ? '350ms' : '0ms' }}>
            <p className="mb-6 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.description1 }} />
            <p className="mb-6 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.description2 }} />
            <div className="bg-gray-100 dark:bg-black text-gray-900 dark:text-white p-6 rounded-xl mt-8 border-2 border-gray-300 dark:border-black">
              <p className="text-gray-900 dark:text-white" dangerouslySetInnerHTML={{ __html: t.about.funFact }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
