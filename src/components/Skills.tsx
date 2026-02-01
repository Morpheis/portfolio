import { profile } from '../data/profile';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Skills() {
  const scrollRef = useScrollAnimation();

  return (
    <section className="skills-section">
      <div ref={scrollRef}>
        <h2 className="section-title gradient-text animate-on-scroll">
          Skills & Technologies
        </h2>

        <div className="skills-grid">
          {profile.skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className="skill-category animate-on-scroll"
              style={{ '--stagger': `${index * 0.08}s` } as React.CSSProperties}
            >
              <h3 className="skill-category-title">{skillGroup.category}</h3>
              <div className="skill-tags">
                {skillGroup.items.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="education-block animate-on-scroll"
          style={{ '--stagger': '0.4s' } as React.CSSProperties}
        >
          <h3>Education</h3>
          <p><strong>{profile.education.school}</strong></p>
          <p>{profile.education.focus}</p>
        </div>
      </div>
    </section>
  );
}
