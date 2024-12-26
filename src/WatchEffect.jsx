import React, { useState, useEffect } from "react";

const WatchEffect = () => {
    const [value, setValue] = useState("");

    useEffect(() => {
        console.log(`Input value changed to: ${value}`);
    }, [value]); // Run the effect whenever `value` changes

    return (
        <div>
            <label>
                Watch Value:
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </label>
            <p>Current Value: {value}</p>
        </div>
    );
};

export default WatchEffect;
