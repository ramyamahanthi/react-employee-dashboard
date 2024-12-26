import React, { useState } from 'react';
import './styles.css';

const UserDashboard = () => {
    const [name, setName] = useState('John Doe');
    const [status, setStatus] = useState(true); // true = Active, false = Inactive
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    // Save theme preference in localStorage
    React.useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className={`dashboard ${theme}`}>
            <h1>User Dashboard</h1>
            
            {/* User Info Section */}
            <div className="user-info">
                <p>Name: {name}</p>
                <input
                    type="text"
                    placeholder="Change name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            
            {/* User Status Section */}
            <div className="status-toggle">
                <p>Status: {status ? 'Active' : 'Inactive'}</p>
                <button onClick={() => setStatus(!status)}>
                    {status ? 'Set Inactive' : 'Set Active'}
                </button>
                {!status && (
                    <p>Your account is currently inactive. Please update your status.</p>
                )}
            </div>
            
            {/* Theme Toggle Section */}
            <div className="theme-toggle">
                <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                    Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
                </button>
            </div>
        </div>
    );
};

export default UserDashboard;
