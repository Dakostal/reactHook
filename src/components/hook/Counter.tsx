// import { Focus } from "./focus"
// import { Timer } from "./Timer"
// import { PlayingСards } from '../playCard/PlayingСards'
// import { ThemeComponent } from './useContext/tema/ThemeComponent'
// import { ThemeProvider } from './useContext/tema/ThemeProvider'
// import { Count } from "./Count"
// import { Counter } from "./Сounters"
// import { List } from "./List"
// import { LanguageComponent } from './useContext/languageContext/LanguageComponent'
// import { LanguageProvider } from './useContext/languageContext/LanguageProvider'

import { ModalComponent } from "./useContext/modalContext/ModalComponent"
import { ModalContainer } from "./useContext/modalContext/ModalContainer"
import { ModalProvider } from "./useContext/modalContext/ModalProvider"

// import { AuthProvider } from './useContext/authContext/AuthProvider'
// import { Navbar } from './useContext/authContext/Navbar'
// import { Profile } from './useContext/authContext/Profile'
// import { Article } from './useContext/uiContext/Article'
// import { UiSettings } from './useContext/uiContext/UISettings'

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
            {/* <LanguageProvider>
                <LanguageComponent />
            </LanguageProvider> */}
            {/* <AuthProvider>
                <Profile />
                <Navbar />
            </AuthProvider> */}
            {/* <Article>
                <UiSettings />
            </Article> */}
            <ModalProvider>
                <ModalContainer />
                <ModalComponent />
            </ModalProvider>
            
        </div>
    )
}
