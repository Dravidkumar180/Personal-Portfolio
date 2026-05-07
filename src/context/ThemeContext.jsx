import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Get initial theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  // Apply theme to html element
  useEffect(() => {
    const htmlElement = document.documentElement;
    
    // Remove both classes first
    htmlElement.classList.remove('light-theme', 'dark-theme');
    
    // Add the current theme class
    htmlElement.classList.add(`${theme}-theme`);
    
    // Set data attribute for CSS variables
    htmlElement.setAttribute('data-theme', theme);
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
    
    // Optional: Add transition for smooth theme switching
    const style = document.createElement('style');
    style.textContent = `
      * {
        transition: background-color 0.3s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
      }
    `;
    if (!document.querySelector('#theme-transition-style')) {
      style.id = 'theme-transition-style';
      document.head.appendChild(style);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  // Set light theme
  const setLightTheme = () => {
    setTheme('light');
  };

  // Set dark theme
  const setDarkTheme = () => {
    setTheme('dark');
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme, 
      setLightTheme, 
      setDarkTheme,
      isDark: theme === 'dark',
      isLight: theme === 'light'
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};