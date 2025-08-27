import React, { useEffect, useState } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const Header = () => {
  const [theme, setTheme] = useState(' ');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <div className="bg-white h-20 shadow-md z-10 flex justify-center dark:bg-slate-700 mb-12 ">
      <div className="container mx-auto flex justify-between align items-center px-10">
        <div className="text-lg font-semibold dark:text-white sm:text-2xl">
          <h2>Where in the world?</h2>
        </div>
        <div>
          {theme === 'dark' ? (
            <button
              onClick={handleThemeSwitch}
              className="flex justify-around items-center gap-x-2 dark:text-white   focus:outline-none  "
            >
              <BsSunFill className="font-light text-sm" />
              Light Mode
            </button>
          ) : (
            <button
              onClick={handleThemeSwitch}
              className="flex justify-around items-center gap-x-2 font-medium dark:text-white "
            >
              <BsMoonFill className="bg-white font-light text-sm" /> Dark Mode
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
