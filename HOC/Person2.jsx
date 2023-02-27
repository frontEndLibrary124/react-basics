import React from 'react';
import HOC from './HOC';

const Person2 = ({money, handleIncrease}) => {
    return (
        <div>
            <span>Person2 money: ${money}</span>
            <button onClick={handleIncrease}>Increase Money</button>
        </div>
    );
}

export default HOC(Person2);