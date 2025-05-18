import { useEffect, useRef, useState } from "react"


export const Focus = () => {
    const [input, setInput] = useState('')
    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(()=> {
        inputRef.current?.focus()
    },[])


    return (
        <div>
            <input ref={inputRef} value={input} onChange={(e)=> setInput(e.target.value)}/>
        </div>
    )
} 