import { useEffect, useRef, useState } from "react"


export const NewTiemr = () => {
    const [timer, setTimer] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const timerRef = useRef(null)
    const addTimer = () => {
        setTimer((prev)=> prev + 1)
    }

    useEffect(()=> {
        if(isRunning){
            timerRef.current = setInterval(addTimer, 1000)
        } else {
            clearInterval(timerRef.current)
        } 
        return () => clearInterval(timerRef.current)
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
        setTimer(0)
        setIsRunning(false)
    }

    return(
        <div>
            <h1>{timer}</h1>
            <button onClick={start}>Старт</button>
            <button onClick={stop}>Стоп</button>
            <button onClick={reset}>Сброс</button>
        </div>
    )
}