import { profile } from '../data/profile';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-label hero-entrance" style={{ animationDelay: '0.1s' }}>
          {profile.title}
        </span>

        <h1 className="hero-title hero-entrance" style={{ animationDelay: '0.3s' }}>
          <span>Quality-Driven</span>
          <span>Engineering</span>
          <span>Leadership</span>
        </h1>

        <p className="hero-description hero-entrance" style={{ animationDelay: '0.5s' }}>
          {profile.summary}
        </p>

        <div className="hero-stats hero-entrance" style={{ animationDelay: '0.7s' }}>
          <div className="stat">
            <span className="stat-value">15+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat">
            <span className="stat-value">90%+</span>
            <span className="stat-label">Test Coverage</span>
          </div>
          <div className="stat">
            <span className="stat-value">80%+</span>
            <span className="stat-label">Defect Reduction</span>
          </div>
        </div>

        <div className="scroll-prompt hero-entrance" style={{ animationDelay: '0.9s' }}>
          <span>Scroll to explore my journey</span>
          <ChevronDown className="bounce" size={24} />
        </div>
      </div>
    </section>
  );
}
