import { profile } from '../data/profile';
import { Building2, Calendar, ChevronRight, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { calculateDuration } from '../utils/duration';

export function Experience() {
  const scrollRef = useScrollAnimation();

  return (
    <section className="experience-section">
      <div ref={scrollRef}>
        {profile.experience.map((company, companyIndex) => (
          <div
            key={company.company}
            className="company-block animate-on-scroll"
            style={{ '--stagger': `${companyIndex * 0.08}s` } as React.CSSProperties}
          >
            <div className="company-header">
              <div className="company-icon">
                <Building2 size={24} />
              </div>
              <div className="company-info">
                <h3 className="company-name">{company.company}</h3>
                <span className="company-meta">
                  {company.roles.length} {company.roles.length === 1 ? 'Role' : 'Roles'} • {company.location}
                </span>
              </div>
              <div className="company-duration">
                <Clock size={14} />
                <span>{calculateDuration(company.roles)}</span>
              </div>
            </div>

            <div className="roles-container">
              {company.roles.map((role, roleIndex) => (
                <div
                  key={`${company.company}-${role.title}`}
                  className="animate-on-scroll"
                  style={{ '--stagger': `${roleIndex * 0.12}s` } as React.CSSProperties}
                >
                  <div className="role-card">
                    <div className="role-header">
                      <div className="role-title-section">
                        <h4 className="role-title">{role.title}</h4>
                        {company.roles.length > 1 && (
                          <span className="role-number">
                            Role {roleIndex + 1}/{company.roles.length}
                          </span>
                        )}
                      </div>
                      <div className="role-dates">
                        <Calendar size={14} />
                        <span>{role.startDate} – {role.endDate}</span>
                      </div>
                    </div>

                    <ul className="role-highlights">
                      {role.highlights.map((highlight, i) => (
                        <li key={i}>
                          <ChevronRight size={16} className="highlight-icon" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
