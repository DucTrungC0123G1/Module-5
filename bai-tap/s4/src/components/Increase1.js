import React, {useState} from "react";
import Increase from "./Increase";
export const Increase1 =() =>{
    const [count,setCount] = Increase(1);
    const handleIncrease =()=>{
        setCount(1);
    }
    return(
        <div>
            <p>{count}</p>
            <button onClick={handleIncrease}>+1</button>
    </div>


    )
}