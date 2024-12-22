import { useState } from "react"

function Counter() {
    const [count,setCount] = useState(0)
    const fiveIncrement = () => {
        for (let i = 0; i < 5; i++) {
            setCount(count+1)
        }
    }
    return(
        <div>
            <div>{count}</div>
            <button onClick={()=>setCount(count+1)}>+</button>
            <br />
            <button onClick={()=>setCount(count-1)}> - </button>
            <br />
            <button onClick={fiveIncrement}>+++++</button>

        </div>
    )
  }
export default Counter  