import { useState, useReducer, useEffect, useMemo, createContext } from "react";
const themeContex = createContext()
function ThemeProvider({ children }) {

    const [theme, setTheme] = useState("dark")
    const tonggleTheme = () => {
        setTheme(theme === 'dark' ? "light" : 'dark')
    }
    const value = {
        theme,
        tonggleTheme
    }
    return (
        <themeContex.Provider value={value}>
            {children}
        </themeContex.Provider>

    )

}
export { ThemeProvider, themeContex }