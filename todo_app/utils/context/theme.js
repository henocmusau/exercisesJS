'use client'

import React, { createContext, useEffect } from 'react';

const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('is_dark_theme');
        if (typeof storedPrefs === 'boolean') {
            return storedPrefs;
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            return true;
        }
    }

    return false // light theme as the default;
};

const ThemeContext = createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
    const [theme, setTheme] = React.useState(getInitialTheme);

    const rawSetTheme = (rawTheme) => {
        const root = window.document.documentElement;
        const isDark = rawTheme === true;

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(rawTheme);

        localStorage.setItem('is_dark_theme', rawTheme);
    };

    if (initialTheme) {
        rawSetTheme(initialTheme);
    }

    useEffect(() => {
        rawSetTheme(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;