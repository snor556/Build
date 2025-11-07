import React,{useActionState, useState} from 'react'

function ClickCounter(){
    let [click,setClick] = useState(0);
    function handleClick(){
        setClick(click+1);
    };
    return(
        <div>
            <p>you clicked {click} times</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
export default ClickCounter;