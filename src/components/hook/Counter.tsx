// import { Focus } from "./focus"
// import { Timer } from "./Timer"
// import { PlayingСards } from '../playCard/PlayingСards'
// import { ThemeComponent } from './useContext/tema/ThemeComponent'
// import { ThemeProvider } from './useContext/tema/ThemeProvider'
// import { Count } from "./Count"
// import { Counter } from "./Сounters"
// import { List } from "./List"

import { LanguageComponent } from "./useContext/languageContext/LanguageComponent"
import { LanguageProvider } from "./useContext/languageContext/LanguageProvider"

// import { NewTiemr } from "./NewTimer"
// import { Demo } from "./useEffect/Count"

export const Calculator = () => {
    return (
        <div>
            {/* <List /> */}
            {/* <Focus /> */}
            {/* <Timer /> */}
            {/* <Counter /> */}
            {/* <PlayingСards /> */}
            {/* <Count /> */}
            {/* <NewTiemr /> */}
            {/* <Demo /> */}
            {/* <ThemeProvider>
                <ThemeComponent />
            </ThemeProvider> */}
            <LanguageProvider>
                <LanguageComponent />
            </LanguageProvider>
        </div>
    )
}
