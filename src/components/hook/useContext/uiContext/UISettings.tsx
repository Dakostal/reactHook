import { useContext } from "react"
import { UIContext } from "./context"


export const UiSettings = () => {
    const {density, theme, fonts, toggleTheme, toggleFont, toggleDensity} = useContext(UIContext)

    const style = {
        backgraund: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '1rem',
        textAlign: 'centr',
        borderRadius: '8px',
    }

    const styleSize= {
        fontSize: fonts,
        padding: density === 'compact' ? '4px 8px' : '12px 16px',
    }

    return(
        <div>
            <div style={style}>
                <h1 style={styleSize}>текущая тема: {theme}</h1>
                <button onClick={toggleTheme}>Сменить тему</button>
                <button onClick={toggleFont}>Сменить размер шрифта</button>
                <button onClick={toggleDensity}>Плотность: {density === "compact" ? "Компактная" : "Обычная"}</button>
            </div>
        </div>
    )
}