import Increase from "./Increase";
import React from "react";

export const Increase2 =() =>{
    const [count,setCount] = Increase(2);
    const handleIncrease =()=>{
        setCount(2);
    }
    return(
        <div>
            <p>{count}</p>
            <button onClick={handleIncrease}>+2</button>
        </div>
    )
}