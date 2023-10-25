import React, {useState} from "react";
import useIncrease from "./Increase";
export const Increase1 =() =>{
    const [count,setCount] = useIncrease;
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