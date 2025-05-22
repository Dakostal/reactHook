import { useEffect, useState } from "react"

interface DemoProps {

}

export const Demo = ({}: DemoProps) => {
    const [count, setCount] = useState(0)

    useEffect(()=> {
        console.log('The count is: ', count);

        return () => {
            console.log('i am being cleaned up!');
        }
    }, [count])
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count + 1)}>Добавить</button>
            <button onClick={()=> setCount(count - 1)}>Убавить</button>
        </div>
    )
}