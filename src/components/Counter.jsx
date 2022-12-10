import React, {useState} from "react";

const Counter = (props) => {
    
    const [count, setCount] = useState(props.count)
    //count(variable) = local variable
    //setCount(setter) = changes local variable, and triggers a render
    //useState(default value)

    return(
        <div>
            <h1>Counter useState Hook Example</h1>
            <h2>current count = {count}</h2>
            <button onClick={() => setCount(count + 1)}>increment {count}</button>
            <button onClick={() => setCount (count -1)}>decrement</button>
            <button onClick={() => setCount (0)}>reset</button>
        </div>
    )


}

export default Counter

// useState is a helper function that sets up a variable and setter function for that variable
// we can use the setter function to change the value of the variable (i.e. state)
// and react will automatically rerender the state change


