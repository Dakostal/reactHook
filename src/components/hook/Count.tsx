import { useEffect, useRef, useState } from "react"



export const Count = () => {
    const [inputCount, setInputCount] = useState(0)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const addCount = () => {
        setInputCount(inputCount + 1)
    }

    useEffect(()=> {
        inputRef.current?.focus()
    },[])

    return(
        <div>
            <h1 ref={inputRef}>{inputCount}</h1>
            <button onClick={addCount}>Увеличить</button>
        </div>
    )
}