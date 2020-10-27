import React, {useState} from "react";

function CounterUseState() {
    const [count, setCounter] = useState(0);
    const onIncrease = () => setCounter(count+1);
    const onDecrease = () => setCounter(count-1);
    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}> +1</button>
                <button onClick={onDecrease}> -1</button>
            </div>
        </div>
    )
}

export default CounterUseState;

