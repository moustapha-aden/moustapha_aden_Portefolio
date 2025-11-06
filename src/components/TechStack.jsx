import { 
  FaHtml5, FaCss3Alt, FaJs, FaPhp, FaPython, FaCode,
  FaReact, FaLaravel, FaMobileAlt, FaDatabase, FaGitAlt,
  FaGithub, FaCodeBranch
} from 'react-icons/fa';
import { SiTailwindcss, SiPostgresql, SiMysql, SiPostman } from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const TechStack = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const languages = [
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "PHP", icon: FaPhp, color: "#777BB4" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "C", icon: FaCode, color: "#A8B9CC" }
  ];

  const frameworks = [
    { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
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

  const TechCategory = ({ title, items, icon: Icon }) => (
    <div className="tech-category">
      <div className="tech-category-header">
        <Icon className="tech-category-icon" />
        <h3>{title}</h3>
      </div>
      <div className="tech-items">
        {items.map((item, index) => (
          <div key={index} className="tech-item" style={{ '--tech-color': item.color }}>
            <item.icon className="tech-icon" />
            <span className="tech-name">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="tech" className="tech-stack">
      <div className="container">
        <h2 className="section-title">{t.tech.title}</h2>
        <div className="tech-grid">
          <TechCategory 
            title={t.tech.languages}
            items={languages} 
            icon={FaCode}
          />
          <TechCategory 
            title={t.tech.frameworks}
            items={frameworks} 
            icon={FaReact}
          />
          <TechCategory 
            title={t.tech.databases}
            items={databases} 
            icon={FaDatabase}
          />
        </div>
      </div>
    </section>
  );
};

export default TechStack;

