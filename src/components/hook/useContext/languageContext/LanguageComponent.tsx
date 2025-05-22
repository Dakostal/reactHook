import { useContext } from "react"
import { LanguageContext } from "./context"


export const LanguageComponent = () => {
    const {currentLanguage, dictionary, toggleLanguage} = useContext(LanguageContext)

    return(
        <div>
            <h1>Текущий язык {currentLanguage}</h1>
            <p>{dictionary.hello}</p>
            <button onClick={toggleLanguage}>Сменить язык</button>
        </div>
    )
}