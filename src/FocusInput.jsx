import React, { useRef } from "react";

const FocusInput = () => {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus(); // Directly focus the input field
    };

    return (
        <div>
            <label>
                Focus Input:
                <input ref={inputRef} type="text" />
            </label>
            <button onClick={handleFocus}>Focus Input</button>
        </div>
    );
};

export default FocusInput;
