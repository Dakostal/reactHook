import { createContext } from "react";


export const UIContext = createContext({
    density: 'normal',
    fonts: 'medium', 
    theme: 'light',
    toggleTheme: ()=> {},
    toggleFont: ()=> {},
    toggleDensity: ()=> {},
})