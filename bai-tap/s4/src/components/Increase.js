import React, {useState} from "react";

function Increase() {
    const [countFirst, setCountFirst] = useState(0);
    const [countSecond, setCountSecond] = useState(0);
    const handleIncrease = () => {
        setCountFirst(countFirst + 1);
    }
    const handleIncrease2 = () => {
        setCountSecond(countSecond + 2);
    }
    return (
        <>
            <h3>Count : {countFirst}</h3>
            <button onClick={handleIncrease}>Increase</button>
            <h3>Count 2: {countSecond}</h3>
            <button onClick={handleIncrease2}>Increase 2</button>
        </>
    )
}

export default Increase;