import { profile } from '../data/profile';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, ArrowRight } from 'lucide-react';

export function Contact() {
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
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Let's Connect
      </motion.h2>
      <p className="contact-subtitle">Find me on these platforms and let's collaborate</p>

      <div className="contact-links">
        {links.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target={link.name !== 'Email' ? '_blank' : undefined}
            rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
            className="contact-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <link.icon size={28} className="contact-icon" />
            <div className="contact-info">
              <h3>{link.name}</h3>
              <p>{link.description}</p>
            </div>
            <ArrowRight size={20} className="contact-arrow" />
          </motion.a>
        ))}
      </div>

      <motion.div 
        className="journey-end"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="sparkle">✨</span>
        <h3>That's My Journey</h3>
        <p>15+ years evolving from hands-on testing through automation architecture to engineering leadership, driving quality excellence and team success.</p>
      </motion.div>
    </section>
  );
}
