import React, { useState, useMemo, useCallback } from "react";
import { useTheme } from "./ThemeContext";
import UserItem from "./UserItem";

const mockUsers = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];

const UserList = () => {
    const { theme, toggleTheme } = useTheme();
    const [search, setSearch] = useState("");

    const filteredUsers = useMemo(() => {
        return mockUsers.filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    const handleUserClick = useCallback((user) => {
        alert(`User clicked: ${user.name}`);
    }, []);

    return (
        <div className={`user-list ${theme}`}>
            <button onClick={toggleTheme}>
                Toggle to {theme === "light" ? "Dark" : "Light"} Mode
            </button>
            <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {filteredUsers.map((user) => (
                    <UserItem key={user.id} user={user} onClick={handleUserClick} />
                ))}
            </ul>
        </div>
    );
};

export default UserList;
