'use client'
import React, { useState, useEffect } from 'react'

const appName = 'TodoH-'

const getInitialTodos = (id) => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem(id);
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            return 'dark';
        }
    }

    return 'light' // light theme as the default;
};

export default function useStorage(id, initialValue) {
    const prefix = appName + id
    const [value, setValue] = useState(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const data = window.localStorage.getItem(prefix)
            if (data != null) return JSON.parse(data)
            if (typeof initialValue === 'function') {
                return initialValue()
            } else { return initialValue }
        } else { return null }
    })

    useEffect(() => {
        window.localStorage.setItem(prefix, JSON.stringify(value))
    }, [prefix, value])

    return [value, setValue]
}
