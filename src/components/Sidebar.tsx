import { profile } from '../data/profile';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="profile-image">
          <img 
            src="/ken-zink.png" 
            alt={profile.name}
            className="avatar"
          />
        </div>
        
        <div className="profile-info">
          <h1 className="name">{profile.name}</h1>
          <h2 className="title">{profile.title}</h2>
          
          <div className="social-links">
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={profile.social.email} aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="about-section">
          <h3>About Me</h3>
          {profile.about.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="location">
          <MapPin size={16} />
          <span>{profile.location}</span>
        </div>
      </div>
    </aside>
  );
}
