import { useState } from "react"
import { UIContext } from "./context"



export const Article = ({ children}) => {
    const [theme, setTheme] = useState('light')
    const [fonts, setFonts] = useState('medium')
    const [density, setDensity] = useState('normal')

    const toggleTheme = () => {
        setTheme((prev)=> (prev === 'light' ? 'dark' : 'light'))
    }

    const toggleDensity = () => {
        setDensity((prev)=> (prev === 'normal' ? 'compact' : 'normal'))
    }

    const toggleFont = () => {
        const font = ['small', 'medium', 'large']
        const ranfomfomt = font[Math.floor(Math.random() * font.length)]
        setFonts(ranfomfomt)
    }

    return(
        <UIContext.Provider value={{density, theme, fonts, toggleTheme, toggleFont, toggleDensity}}>
            { children}
        </UIContext.Provider>
    )
}