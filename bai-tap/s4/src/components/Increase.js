import React, {useState} from "react";

const useIncrease = (props) => {
    const [count, setCount] = useState(props);
    const handleIncrease = changeCount => {
        setCount(prevState => prevState + props);
    }
    return [count, handleIncrease]
}
export default useIncrease();
