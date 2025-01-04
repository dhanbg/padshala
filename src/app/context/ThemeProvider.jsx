"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "./ThemeContext"

const ThemeProvider = ({ children }) => {
    const values = {
        
    }
    
    return (
        <MyContext.Provider value={values}>
        {children}
    </MyContext.Provider>
)
}

export default ThemeProvider;