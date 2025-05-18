import { useEffect, useRef, useState } from "react"


export const Timer = () => {
    const [timers, setTimer] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const timerRef = useRef(null)
    const addTimer = () => {
        setTimer((prev)=> prev + 1)
    }

    useEffect(()=> {
        if (isRunning) {
            timerRef.current = setInterval(addTimer, 1000)
        } else {
            clearInterval(timerRef.current)
        }
        return ()=> clearInterval(timerRef.current)
    }, [isRunning])

    const start = () => {
        if(!isRunning) {
            setIsRunning(true)
        }
    }

    const stop = () => {
        setIsRunning(false)
    }

    const reset = () => {
        setIsRunning(false)
        setTimer(0)
    }
    return (
        <div>
            <h1>{timers}</h1>
            <button onClick={start}>Старт</button>
            <button onClick={stop}>Стоп</button>
            <button onClick={reset}>Сброс</button>
        </div>
    )
}