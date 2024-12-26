import React, { useRef, useState } from "react";

const NameForm = () => {
    const [name, setName] = useState("");
    const initialNameRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!initialNameRef.current) {
            initialNameRef.current = name; // Store the first entered name
        }
        alert(`Submitted name: ${name}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
            <p>Initial Name: {initialNameRef.current || "Not set yet"}</p>
        </form>
    );
};

export default NameForm;
