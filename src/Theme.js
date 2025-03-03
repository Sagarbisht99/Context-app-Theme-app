import React, { useContext } from "react"
import { createContext } from "react"

export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme : () => {},
    lightTheme : () => {}
});

export const ThemeProvider = ThemeContext.Provider; 

export default function usetheme(){
     return useContext(ThemeContext)
}
