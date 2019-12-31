import React, { useState } from 'react';

function Toggler() {
    const [isHappy, setIsHappy] = useState(true);
    const [isHeartBroken, setIsHeartBroken] = useState(false);

    return (
        <div>
            <h1 onClick={() => setIsHappy(!isHappy)}>{isHappy ? ':)' : ':('}</h1>
            <h1 onClick={() => setIsHeartBroken(!isHeartBroken)}>{isHeartBroken ? '</3' : '<3'}</h1>
        </div>
        
    );
}

export default Toggler;