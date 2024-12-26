import React, { useState, useEffect } from "react";

const useWatch = (value) => {
    const [watchedValue, setWatchedValue] = useState(value);

    useEffect(() => {
        setWatchedValue(value);
    }, [value]); // Update watchedValue when value changes

    return watchedValue;
};

const WatchInput = () => {
    const [inputValue, setInputValue] = useState("");
    const watchedValue = useWatch(inputValue);

    return (
        <div>
            <label>
                Watch Input:
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </label>
            <p>Watched Value: {watchedValue}</p>
        </div>
    );
};

export default WatchInput;
