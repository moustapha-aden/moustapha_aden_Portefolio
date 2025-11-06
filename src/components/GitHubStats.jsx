import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const GitHubStats = () => {
  const username = "moustapha-aden";
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="github-stats" className="github-stats">
      <div className="container">
        <h2 className="section-title">{t.github.title}</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>{t.github.stats}</h3>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=00D9FF&icon_color=00D9FF&text_color=C9D1D9`}
              alt="GitHub Stats"
              className="github-stat-image"
              loading="lazy"
              onError={(e) => {
                // Fallback sans les paramètres problématiques
                e.target.src = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117`;
              }}
            />
          </div>
          <div className="stat-card">
            <h3>{t.github.streak}</h3>
            <div className="github-streak-container">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=0D1117&stroke=00D9FF&ring=00D9FF&fire=FF6B6B&currStreakLabel=00D9FF&dates=00D9FF`}
                alt="GitHub Streak"
                className="github-stat-image github-streak-image"
                loading="lazy"
                onError={(e) => {
                  e.target.src = `https://github-readme-streak-stats.demolab.com/?user=${username}&theme=tokyonight&hide_border=true&background=0D1117`;
                }}
              />
            </div>
          </div>
          <div className="stat-card">
            <h3>{t.github.languages}</h3>
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=00D9FF&text_color=C9D1D9&langs_count=8`}
              alt="Top Languages"
              className="github-stat-image"
              loading="lazy"
              onError={(e) => {
                e.target.src = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true`;
              }}
            />
          </div>
          <div className="stat-card">
            <h3>{t.github.contributions}</h3>
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=tokyo-night&hide_border=true&bg_color=0D1117&color=00D9FF&line=00D9FF&point=FF6B6B&area=true&area_color=00D9FF`}
              alt="Contribution Graph"
              className="github-stat-image"
              loading="lazy"
              onError={(e) => {
                e.target.src = `https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=tokyo-night&hide_border=true`;
              }}
            />
          </div>
        </div>
        <div className="trophies-section">
          <h3>{t.github.trophies}</h3>
          <img
            src={`https://github-profile-trophy.vercel.app/?username=${username}&theme=tokyonight&no-frame=true&no-bg=true&row=1&column=7&margin-w=15&margin-h=15`}
            alt="GitHub Trophies"
            className="github-trophies"
            loading="lazy"
            onError={(e) => {
              e.target.src = `https://github-profile-trophy.vercel.app/?username=${username}&theme=tokyonight&no-frame=true&no-bg=true`;
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;

