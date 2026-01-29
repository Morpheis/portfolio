import { profile } from '../data/profile';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="hero-label">{profile.title}</span>
        
        <h1 className="hero-title">
          <span>Quality-Driven</span>
          <span>Engineering</span>
          <span>Leadership</span>
        </h1>
        
        <p className="hero-description">
          {profile.summary}
        </p>

        <div className="hero-stats">
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

        <div className="scroll-prompt">
          <span>Scroll to explore my journey</span>
          <ChevronDown className="bounce" size={24} />
        </div>
      </motion.div>
    </section>
  );
}
