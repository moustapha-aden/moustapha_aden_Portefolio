import { useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';
import { translations } from '../translations';

const Quote = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const quotes = t.quote.quotes;
  const [sectionRef, isInView] = useInView({ threshold: 0.2 });

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, [language, quotes]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        setIsTransitioning(false);
      }, 400);
    }, 10000);

    return () => clearInterval(interval);
  }, [language, quotes]);

  return (
    <section ref={sectionRef} className="py-16 bg-black text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <FaQuoteLeft className="text-5xl opacity-50 mb-4 mx-auto transition-transform duration-300 hover:scale-110" />
          <blockquote className={`text-2xl italic leading-relaxed text-white transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            {currentQuote}
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Quote;
