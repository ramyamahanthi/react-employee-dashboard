import React, { useState, useEffect } from 'react';
import './styles.css';
import { useTheme } from "./ThemeContext";


const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    

const UserList = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`user-list ${theme}`}>
            <button onClick={toggleTheme}>
                Toggle to {theme === "light" ? "Dark" : "Light"} Mode
            </button>
            {/* Placeholder for list */}
        </div>
    );
};



    // Fetch data when the component mounts
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Mock API
                if (!response.ok) throw new Error('Failed to fetch data');
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    // Timer to update document title with the number of users
    useEffect(() => {
        const interval = setInterval(() => {
            document.title = `Users fetched: ${users.length}`;
        }, 5000);

        // Cleanup timer
        return () => clearInterval(interval);
    }, [users]);

    // Filter users by search term
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="user-list-container">
            <h1>Active Users</h1>
            <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="search-input"
            />
            {loading && <p className="loading">Loading...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && (
                <ul className="user-list">
                    {filteredUsers.map(user => (
                        <li key={user.id} className="user-item">
                            {user.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserList;
