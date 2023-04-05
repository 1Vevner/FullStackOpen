import { useState } from 'react'


const Rend = (props) => {

    const [ counter, setCounter ] = useState(0)

    const setToValue = (value) => () =>{
        console.log ("new value", value)
        setCounter(value)
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={setToValue(counter + 1)}>Plus</button>
            <button onClick={setToValue(0)}>Reset</button>
            <button onClick={setToValue(counter - 1)}>Minus</button>
        </div>
    )
}

export default Rend