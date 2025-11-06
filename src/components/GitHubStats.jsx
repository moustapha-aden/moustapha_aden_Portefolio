import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const GitHubStats = () => {
  const username = "moustapha-aden";
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="github-stats" className="github-stats py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t.github.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
            <h3 className="mb-4 text-gray-900 dark:text-white text-xl text-center">
              {t.github.stats}
            </h3>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=00D9FF&icon_color=00D9FF&text_color=C9D1D9`}
              alt="GitHub Stats"
              className="w-full h-auto rounded-lg block object-contain bg-transparent"
              loading="lazy"
              onError={(e) => {
                e.target.src = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117`;
              }}
            />
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
            <h3 className="mb-4 text-gray-900 dark:text-white text-xl text-center">
              {t.github.streak}
            </h3>
            <div className="w-full flex justify-center items-center overflow-hidden min-h-[200px]">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=0D1117&stroke=00D9FF&ring=00D9FF&fire=FF6B6B&currStreakLabel=00D9FF&dates=00D9FF`}
                alt="GitHub Streak"
                className="max-w-full h-auto min-w-full"
                loading="lazy"
                onError={(e) => {
                  e.target.src = `https://github-readme-streak-stats.demolab.com/?user=${username}&theme=tokyonight&hide_border=true&background=0D1117`;
                }}
              />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
            <h3 className="mb-4 text-gray-900 dark:text-white text-xl text-center">
              {t.github.languages}
            </h3>
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=00D9FF&text_color=C9D1D9&langs_count=8`}
              alt="Top Languages"
              className="w-full h-auto rounded-lg block object-contain bg-transparent"
              loading="lazy"
              onError={(e) => {
                e.target.src = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true`;
              }}
            />
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
            <h3 className="mb-4 text-gray-900 dark:text-white text-xl text-center">
              {t.github.contributions}
            </h3>
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=tokyo-night&hide_border=true&bg_color=0D1117&color=00D9FF&line=00D9FF&point=FF6B6B&area=true&area_color=00D9FF`}
              alt="Contribution Graph"
              className="w-full h-auto rounded-lg block object-contain bg-transparent"
              loading="lazy"
              onError={(e) => {
                e.target.src = `https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=tokyo-night&hide_border=true`;
              }}
            />
          </div>
        </div>
        <div className="text-center">
          <h3 className="mb-6 text-gray-900 dark:text-white text-xl">
            {t.github.trophies}
          </h3>
          <img
            src={`https://github-profile-trophy.vercel.app/?username=${username}&theme=tokyonight&no-frame=true&no-bg=true&row=1&column=7&margin-w=15&margin-h=15`}
            alt="GitHub Trophies"
            className="w-full max-w-4xl mx-auto"
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
