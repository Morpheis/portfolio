import { profile } from '../data/profile';
import { Linkedin, Github, Mail, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Contact() {
  const scrollRef = useScrollAnimation();

  const links = [
    {
      name: 'LinkedIn',
      description: 'Professional network & career updates',
      url: profile.social.linkedin,
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      description: 'Open source projects & code samples',
      url: profile.social.github,
      icon: Github,
    },
    {
      name: 'Email',
      description: 'Get in touch directly',
      url: profile.social.email,
      icon: Mail,
    },
  ];

  return (
    <section className="contact-section">
      <div ref={scrollRef}>
        <h2 className="section-title animate-on-scroll">
          Let's Connect
        </h2>
        <p
          className="contact-subtitle animate-on-scroll"
          style={{ '--stagger': '0.05s' } as React.CSSProperties}
        >
          Find me on these platforms and let's collaborate
        </p>

        <div className="contact-links">
          {links.map((link, index) => (
            <div
              key={link.name}
              className="animate-on-scroll"
              style={{ '--stagger': `${(index + 1) * 0.1}s` } as React.CSSProperties}
            >
              <a
                href={link.url}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="contact-card"
              >
                <link.icon size={28} className="contact-icon" />
                <div className="contact-info">
                  <h3>{link.name}</h3>
                  <p>{link.description}</p>
                </div>
                <ArrowRight size={20} className="contact-arrow" />
              </a>
            </div>
          ))}
        </div>

        <div
          className="journey-end animate-on-scroll"
          style={{ '--stagger': '0.3s' } as React.CSSProperties}
        >
          <span className="sparkle">✨</span>
          <h3>That's My Journey</h3>
          <p>
            15+ years evolving from hands-on testing through automation
            architecture to engineering leadership, driving quality excellence
            and team success.
          </p>
        </div>
      </div>
    </section>
  );
}
