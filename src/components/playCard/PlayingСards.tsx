import { useState } from 'react'
import { Cards } from './Cards'
import cards from './cards.json'

export const PlayingСards = () => {
    const [isVisible, setIsVisible] = useState(false)

    const clickBtn = () => {
        setIsVisible(false)
    }

    return (
        <div>
            {cards.map((obj) => (
                <Cards title={obj.name} image={obj.imgUrl} />
            ))}

            <button onClick={clickBtn} disabled={isVisible}>
                Нажми меня
            </button>
        </div>
    )
}
