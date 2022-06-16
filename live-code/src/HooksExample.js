import React, { useState } from 'react';

const HooksExample = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <header>
                he button is pressed:{counter} times.
                <button
                    onClick={() => setCounter(counter + 1)}
                >
                    Click me!!
                </button>
            </header>
        </div>
    );
}


export default HooksExample;