import React from 'react';
import HOC from './HOC';

const Person1 = ({money, handleIncrease}) => {
    return (
        <div>
            <span>Person1 money: ${money}</span>
            <button onClick={handleIncrease}>Increase Money</button>
        </div>
    );
}

export default HOC(Person1);