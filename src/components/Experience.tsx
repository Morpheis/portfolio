import { profile } from '../data/profile';
import { motion } from 'framer-motion';
import { Building2, Calendar, ChevronRight } from 'lucide-react';

export function Experience() {
  return (
    <section className="experience-section">
      {profile.experience.map((company, companyIndex) => (
        <motion.div 
          key={company.company}
          className="company-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: companyIndex * 0.1 }}
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
          </div>

          <div className="roles-container">
            {company.roles.map((role, roleIndex) => (
              <motion.div 
                key={`${company.company}-${role.title}`}
                className="role-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: roleIndex * 0.1 }}
              >
                <div className="role-header">
                  <div className="role-title-section">
                    <h4 className="role-title">{role.title}</h4>
                    {company.roles.length > 1 && (
                      <span className="role-number">Role {roleIndex + 1}/{company.roles.length}</span>
                    )}
                  </div>
                  <div className="role-dates">
                    <Calendar size={14} />
                    <span>{role.startDate} - {role.endDate}</span>
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
