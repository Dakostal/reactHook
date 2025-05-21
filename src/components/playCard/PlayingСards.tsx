import { useState } from 'react'
import { Cards } from './Cards'
import cards from './cards.json'
import diamondsIcon from '../../../public/img/Diamonds.svg'
import heartsIcon from '../../../public/img/Hearts.svg'
import spadesIcon from '../../../public/img/Spades.svg'
import clubsIcon from '../../../public/img/Clubs.svg'

const suitItem = {
    diamonds: {
        color: 'red',
        icon: diamondsIcon
    },

    hearts: {
        color: 'red',
        icon: heartsIcon
    },

    spades: {
        color: 'black',
        icon: spadesIcon
    },

    clubs: {
        color: 'black',
        icon: clubsIcon
    },
}

export const PlayingСards = () => {
    const [isVisible, setIsVisible] = useState(false)

    const clickBtn = () => {
        setIsVisible(false)
    }

    return (
        <div>
            {cards.map((obj) => {
                const {color} = suitItem[obj.suit]
                return (
                    <div 
                        key={obj.numValue} 
                        style={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            color,
                            border: `2px solid ${color}`,
                            width: '80px',
                            height: '120px',
                            borderRadius: '8px',
                            }}> 
                        <Cards title={obj.name} />
                    </div>
            )})}

            <button onClick={clickBtn} disabled={isVisible}>
                Нажми меня
            </button>
        </div>
    )
}
