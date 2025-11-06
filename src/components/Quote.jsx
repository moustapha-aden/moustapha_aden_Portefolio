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
    }, 10000); // Change quote every 10 seconds

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <section className="quote-section">
      <div className="container">
        <div className="quote-card">
          <FaQuoteLeft className="quote-icon" />
          <blockquote className="quote-text">{currentQuote}</blockquote>
        </div>
      </div>
    </section>
  );
};

export default Quote;
