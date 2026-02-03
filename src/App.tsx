import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { ThemeToggle } from './components/ThemeToggle';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <div style={{ backgroundColor: '#ff6b35', color: 'white', textAlign: 'center', padding: '2rem', fontSize: '3rem', fontWeight: 'bold', letterSpacing: '0.1em' }}>
        HI JUDE
      </div>
      <ThemeToggle darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />
      <div className="layout">
        <Sidebar />
        <main className="main-content">
          <Hero />
          <Experience />
          <Skills />
          <Contact />
          <footer className="footer">
            <p>© {new Date().getFullYear()} Ken Zink. All rights reserved.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
