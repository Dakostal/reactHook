// import { Focus } from "./focus"
// import { Timer } from "./Timer"
// import { PlayingСards } from '../playCard/PlayingСards'
import { ThemeComponent } from './useContext/tema/ThemeComponent'
import { ThemeProvider } from './useContext/tema/ThemeProvider'
// import { Count } from "./Count"
// import { Counter } from "./Сounters"
// import { List } from "./List"

export const Calculator = () => {
    return (
        <div>
            {/* <List /> */}
            {/* <Focus /> */}
            {/* <Timer /> */}
            {/* <Counter /> */}
            {/* <PlayingСards /> */}
            {/* <Count /> */}

            <ThemeProvider>
                <ThemeComponent />
            </ThemeProvider>
        </div>
    )
}
