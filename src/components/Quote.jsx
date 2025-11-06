import { useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Quote = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const quotes = t.quote.quotes;

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, [language, quotes]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 10000);

    return () => clearInterval(interval);
  }, [language, quotes]);

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <FaQuoteLeft className="text-5xl opacity-50 mb-4 mx-auto" />
          <blockquote className="text-2xl italic leading-relaxed text-white">
            {currentQuote}
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Quote;
