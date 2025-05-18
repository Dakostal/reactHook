import { useRef, useState } from 'react'

export const TaskList = () => {
    const [progress, setProgress] = useState(0)
    const [isStarted, setIsStarted] = useState(false)
    const intervalRef = useRef<number | undefined>()

    const intervalFunc = () =>
        setInterval(() => {
            console.log('timer')
            setProgress((prev) => {
                if (prev === 90) {
                    clearInterval(intervalRef.current)
                    return 100
                }
                return prev + 10
            })
        }, 1000)

    const start = () => {
        if (isStarted === true) return
        const interval = intervalFunc()
        setIsStarted(true)

        intervalRef.current = interval
    }

    const stop = () => {
        clearInterval(intervalRef.current)
        setIsStarted(false)
    }

    const clear = () => {
        clearInterval(intervalRef.current)
        setProgress(0)
        setIsStarted(false)
    }

    return (
        <div>
            <div
                style={{
                    position: 'relative',
                    width: 500,
                    height: 30,
                    background: '#ff000069'
                }}
                onMouseEnter={stop}
                onMouseLeave={start}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: `${progress}%`,
                        background: 'red',
                        transition: 'all 0.3s ease'
                    }}
                ></div>
            </div>
            <button onClick={start}>Старт</button>
            <button onClick={stop}>Стоп</button>
            <button onClick={clear}>Сброс</button>
        </div>
    )
}
