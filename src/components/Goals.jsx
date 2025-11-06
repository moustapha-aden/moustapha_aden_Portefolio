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
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-4 mb-6">
        <Icon className="text-3xl text-black dark:text-white" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <ul className="list-none">
        {goals.map((goal, index) => (
          <li 
            key={index} 
            className={`flex items-center gap-4 p-4 mb-2 rounded-lg transition-all duration-300 ${
              goal.completed ? 'opacity-70' : ''
            } hover:bg-gray-100 dark:hover:bg-gray-700`}
          >
            {goal.completed ? (
              <FaCheckCircle className="text-xl text-gray-600 dark:text-gray-400" />
            ) : (
              <FaCircle className="text-xl text-gray-600 dark:text-gray-400" />
            )}
            <span className="text-gray-900 dark:text-white">{goal[language]}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="goals" className="goals py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t.goals.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
