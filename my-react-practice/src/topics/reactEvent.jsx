import React from 'react';

function EventClicker(){
    const handleClick = () => {
        alert('you clicked a button Hello');
    }
    return(
        <div>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
export default EventClicker;