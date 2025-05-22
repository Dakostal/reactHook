import { useState } from "react"
import { LanguageContext } from "./context"

export const LanguageProvider = ({children}) => {
    const [currentLanguage, setCurrentLanguage] = useState('en')

    const dictionary = {
        en: {hello: 'Hello'},
        ru: {hello: 'Привет'},
    }

    const toggleLanguage = () => {
        setCurrentLanguage((prev)=> (prev === 'en' ? 'ru' : 'en'))
    }

    return(
        <LanguageContext.Provider value={{
            currentLanguage, 
            dictionary: dictionary[currentLanguage], 
            toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}