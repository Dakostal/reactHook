import { useEffect, useRef, useState } from "react"


export const Counter = () => {
    const [count, setCount] = useState(0)
    const countRef = useRef(0)

    const addCount = () => {
        setCount((prev)=> prev + 1)
    }

    useEffect(()=> {
            countRef.current = count
    }, [count])

    return (
        <div>
            <h4>Текущее значение: {count}</h4>
            <h4>Предыдущее значение: {countRef.current}</h4>
            <button onClick={addCount}>Увеличить</button>

        </div>
    )
}