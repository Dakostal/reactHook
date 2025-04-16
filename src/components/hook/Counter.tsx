import { useState } from "react"

export const Сalculator = () => {
    const [isCalc, setIsCalc] = useState([])
    const [inputValue, setInputValue] = useState("");

    const result = () => {
        if(inputValue.trim() === "") return;
        setIsCalc([...isCalc, inputValue])
        setInputValue("")
    }

    return(
        <div>
            <input 
                type="text"
                value={inputValue}
                onChange={(e)=> setInputValue(e.target.value)}
            ></input>
                <ul>
                    {isCalc.map((rez, index)=> (
                        <li key={index}>{rez}</li>
                    ))}
                </ul>

            <button onClick={result}>Результат</button>
        </div>

    )
}
