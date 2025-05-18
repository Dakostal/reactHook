import { useState } from "react"
import { Cards } from "./Cards"



export const PlayingСards = () => {
    const [isVisible, setIsVisible] = useState(false)

    const clickBtn = () => {
        setIsVisible(false)
    }

    return(
        <div>
            <Cards />
            <button onClick={clickBtn} disabled={isVisible}>Нажми меня</button>
        </div>
    )
}