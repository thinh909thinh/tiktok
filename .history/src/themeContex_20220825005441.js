import { useState, useReducer, useEffect, useMemo, createContext } from "react";
export const themeContex = createContext()
function ThemeProvider(){
    
  const [theme, setTheme] = useState("dark")
  const tonggleTheme = () => {
    setTheme(theme === 'dark' ? "light" : 'dark')
  }
    return (
        <themeContex.Provider value={theme}>

        </themeContex.Provider>

    )

}
export {ThemeProvider,themeContex}