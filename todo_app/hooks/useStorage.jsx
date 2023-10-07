'use client'
import React, { useState, useEffect } from 'react'

const appName = 'TodoH-'

export default function useStorage({ id, initialValue }) {
    const prefix = appName + id
    const [value, setValue] = useState(() => {
        const data = localStorage.getItem(prefix)
        if (data !== null) return JSON.parse(data)
        if (typeof initialValue === 'function') {
            return initialValue()
        } else { initialValue }
    })

    useEffect(() => {
        localStorage.setItem(prefix, JSON.stringify(value))
    }, [prefix, value])

    return [value, setValue]
}
