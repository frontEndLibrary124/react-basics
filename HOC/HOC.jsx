import React, { useState } from 'react';

const HOC = (OriginalComponent) => {
    const UpdatedComponent = () => {
        const [money, setMoney] = useState(10);
        const handleIncrease = () => {
            setMoney(money * 2);
        }
        return <OriginalComponent money={money} handleIncrease={handleIncrease} />;
    }

    return UpdatedComponent;
}

export default HOC;