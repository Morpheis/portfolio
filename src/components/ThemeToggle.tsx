import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ darkMode, onToggle }: ThemeToggleProps) {
  return (
    <button className="theme-toggle" onClick={onToggle} aria-label="Toggle theme">
      {darkMode ? (
        <>
          <Sun size={18} />
          <span>Light</span>
        </>
      ) : (
        <>
          <Moon size={18} />
          <span>Dark</span>
        </>
      )}
    </button>
  );
}
