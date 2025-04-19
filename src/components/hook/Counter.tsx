import { useState } from 'react'

export const Сalculator = () => {
const [arr, setArr] = useState('')
const [input, setInput] = useState([])

const open = () => {
    if (arr === '') return;
    setInput([...input, arr])
     
}

const deleted = (index) => {
    const filtered = input.filter(del=> del !== arr)
    setInput(filtered)
}
    return (
        <div>
            <input 
                type="text"
                value={arr}
                onChange={(e)=> setArr(e.target.value)}
            />
            <ul>
                {input
                // 
                .map((list, index)=> (
                    <li key={index}>{list}<button onClick={()=>deleted(index)}>Убавить</button></li>
                ))
                 }
            </ul>
            <button onClick={open}>Добавить</button>
        </div>
    )
}
