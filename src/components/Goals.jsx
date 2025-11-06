import { FaRocket, FaUsers, FaCheckCircle, FaCircle } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Goals = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const technicalGoals = [
    { 
      fr: "Maîtriser le développement Full-Stack (Laravel + React)", 
      en: "Master Full-Stack Development (Laravel + React)",
      completed: false 
    },
    { 
      fr: "Approfondir la Cybersécurité & le Hacking Éthique", 
      en: "Deep dive into Cybersecurity & Ethical Hacking",
      completed: false 
    },
    { 
      fr: "Créer des applications mobiles prêtes pour la production avec React Native", 
      en: "Build production-ready mobile apps with React Native",
      completed: false 
    },
    { 
      fr: "Implémenter des fonctionnalités IA/ML dans les applications web", 
      en: "Implement AI/ML features in web applications",
      completed: false 
    },
    { 
      fr: "Apprendre le déploiement cloud (AWS, Azure, ou GCP)", 
      en: "Learn cloud deployment (AWS, Azure, or GCP)",
      completed: false 
    }
  ];

  const communityGoals = [
    { 
      fr: "Contribuer à 10+ projets open-source", 
      en: "Contribute to 10+ open-source projects",
      completed: false 
    },
    { 
      fr: "Écrire des articles de blog techniques & tutoriels", 
      en: "Write technical blog posts & tutorials",
      completed: false 
    },
    { 
      fr: "Collaborer avec des développeurs internationaux", 
      en: "Collaborate with international developers",
      completed: false 
    },
    { 
      fr: "Mentorer des développeurs juniors", 
      en: "Mentor junior developers",
      completed: false 
    },
    { 
      fr: "Créer un portfolio professionnel de développeur", 
      en: "Build a professional developer portfolio",
      completed: true 
    }
  ];

  const GoalList = ({ title, goals, icon: Icon }) => (
    <div className="goals-category">
      <div className="goals-category-header">
        <Icon className="goals-icon" />
        <h3>{title}</h3>
      </div>
      <ul className="goals-list">
        {goals.map((goal, index) => (
          <li key={index} className={`goal-item ${goal.completed ? 'completed' : ''}`}>
            {goal.completed ? <FaCheckCircle className="goal-icon" /> : <FaCircle className="goal-icon" />}
            <span>{goal[language]}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="goals" className="goals">
      <div className="container">
        <h2 className="section-title">{t.goals.title}</h2>
        <div className="goals-grid">
          <GoalList 
            title={t.goals.technical}
            goals={technicalGoals} 
            icon={FaRocket}
          />
          <GoalList 
            title={t.goals.community}
            goals={communityGoals} 
            icon={FaUsers}
          />
        </div>
      </div>
    </section>
  );
};

export default Goals;
