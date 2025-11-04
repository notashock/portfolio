import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // --- THEME HANDLING ---
  const getDefaultTheme = () => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    const hour = new Date().getHours();
    return !(hour >= 6 && hour < 18);
  };

  const [darkMode, setDarkMode] = useState(getDefaultTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // --- RESPONSIVE BREAKPOINTS ---
  const getDeviceType = () => {
    const width = window.innerWidth;
    return {
      isMobile: width < 640,           // Tailwind’s sm breakpoint
      isTablet: width >= 640 && width < 1024, // sm–lg
      isDesktop: width >= 1024,
    };
  };

  const [device, setDevice] = useState(getDeviceType);

  useEffect(() => {
    const handleResize = () => setDevice(getDeviceType());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- CONTEXT VALUE ---
  const contextValue = {
    darkMode,
    setDarkMode,
    ...device,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
