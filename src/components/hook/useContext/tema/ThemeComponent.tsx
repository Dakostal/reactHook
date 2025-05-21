import { useContext } from "react"
import { ThemeContext } from "./context"


export const ThemeComponent = () =>{
    const {theme, toggleTheme} = useContext(ThemeContext)

    const style = {
        backgraund: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '1rem',
        textAlign: 'centr',
        borderRadius: '8px',
    }

    return(
        <div style={style}>
            <p>Текущая тема: {theme}</p>
            <button onClick={toggleTheme}>Сменить тему</button>
        </div>
    )
}