import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const SnakeAnimation = () => {
  const username = "moustapha-aden";
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="snake-section">
      <div className="container">
        <h3 className="snake-title">{t.snake.title}</h3>
        <div className="snake-container">
          <img
            src={`https://raw.githubusercontent.com/${username}/${username}/output/github-contribution-grid-snake.svg`}
            alt="Snake animation"
            className="snake-image"
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
