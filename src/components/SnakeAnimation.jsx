import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const SnakeAnimation = () => {
  const username = "moustapha-aden";
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="snake-section py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <h3 className="text-center text-3xl mb-8 text-gray-900 dark:text-white">
          {t.snake.title}
        </h3>
        <div className="max-w-4xl mx-auto">
          <img
            src={`https://raw.githubusercontent.com/${username}/${username}/output/github-contribution-grid-snake.svg`}
            alt="Snake animation"
            className="w-full rounded-xl"
            loading="lazy"
            onError={(e) => {
              e.target.src = `https://raw.githubusercontent.com/platane/snk/output/github-contribution-grid-snake-dark.svg`;
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default SnakeAnimation;
