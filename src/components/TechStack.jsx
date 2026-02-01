import { 
  FaHtml5, FaCss3Alt, FaJs, FaPhp, FaPython, FaCode,
  FaReact, FaLaravel, FaMobileAlt, FaDatabase, FaGitAlt,
  FaGithub, FaCodeBranch
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiPostgresql, SiMysql, SiPostman, SiDjango } from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';
import { translations } from '../translations';

const TechStack = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });
  const languages = [
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "PHP", icon: FaPhp, color: "#777BB4" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "C", icon: FaCode, color: "#A8B9CC" }
  ];

  const frameworks = [
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
    { name: "Django", icon: SiDjango, color: "#092E20" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "React Native", icon: FaMobileAlt, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  ];

  const databases = [
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#31648C" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "GitHub", icon: FaGithub, color: "#181717" },
    { name: "VS Code", icon: FaCodeBranch, color: "#007ACC" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" }
  ];

  const TechCategory = ({ title, items, icon: Icon, delay = 0 }) => (
    <div 
      className={`bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 tech-card-animate transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-4 mb-6">
        <Icon className="text-3xl text-black dark:text-white" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-4">
        {items.map((item, index) => (
          <div 
            key={index} 
            className={`flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:scale-105 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ '--tech-color': item.color, transitionDelay: isInView ? `${delay + 80 + index * 40}ms` : '0ms' }}
          >
            <item.icon className="text-2xl" style={{ color: item.color }} />
            <span className="font-medium text-gray-900 dark:text-white">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="tech" ref={sectionRef} className="tech-stack py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className={`section-title-reveal text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0 revealed' : 'opacity-0 -translate-y-6'}`}>
          {t.tech.title}
        </h2>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: isInView ? '0.15s' : '0s' }}>
          <TechCategory 
            title={t.tech.languages}
            items={languages} 
            icon={FaCode}
            delay={100}
          />
          <TechCategory 
            title={t.tech.frameworks}
            items={frameworks} 
            icon={FaReact}
            delay={200}
          />
          <TechCategory 
            title={t.tech.databases}
            items={databases} 
            icon={FaDatabase}
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
