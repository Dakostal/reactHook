import { useState } from 'react'

export const Сalculator = () => {
    const [isCalc, setIsCalc] = useState('')
    const [inputValue, setInputValue] = useState('')

    const calc = () => {
        if (isCalc.trim() === '') return
        setInputValue([...isCalc, inputValue])
        setInputValue('')

        const result = eval(isCalc)
        setInputValue(result)
    }

    return (
        <div>
            <input type="text" value={isCalc} onChange={(e) => setIsCalc(e.target.value)} />
            <button onClick={calc}>Результат</button>
            <p>{inputValue}</p>
        </div>
    )
}
