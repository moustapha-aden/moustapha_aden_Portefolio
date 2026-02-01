import { useInView } from '../hooks/useInView';

const AnimatedSection = ({ children, className = '', animation = 'fadeUp', delay = 0 }) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`animate-section ${isInView ? `animate-${animation} animate-visible` : ''} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
