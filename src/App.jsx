import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import GitHubStats from './components/GitHubStats';
import Goals from './components/Goals';
import Contact from './components/Contact';
import Quote from './components/Quote';
import SnakeAnimation from './components/SnakeAnimation';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white">
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
            <TechStack />
            <GitHubStats />
            <Goals />
            <Contact />
            <Quote />
            <SnakeAnimation />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
