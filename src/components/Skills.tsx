import { profile } from '../data/profile';
import { motion } from 'framer-motion';

export function Skills() {
  return (
    <section className="skills-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Skills & Technologies
      </motion.h2>
      
      <div className="skills-grid">
        {profile.skills.map((skillGroup, index) => (
          <motion.div 
            key={skillGroup.category}
            className="skill-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3 className="skill-category-title">{skillGroup.category}</h3>
            <div className="skill-tags">
              {skillGroup.items.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="education-block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h3>Education</h3>
        <p><strong>{profile.education.school}</strong></p>
        <p>{profile.education.focus}</p>
      </motion.div>
    </section>
  );
}
