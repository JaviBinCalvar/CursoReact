import { useState } from "react"

const Contador = () => {
    let [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    const decrece = () => {
        if(count > 1){
            setCount(count - 1)
        }
        

    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>suma</button>
            <button onClick={decrece}>resta</button>
        </div>
    )
    }     
}


export default Contador