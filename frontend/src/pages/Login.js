import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser, setAuth }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            const user = response.data.find(u => u.username === username && u.address.zipcode === password);
            if (user) {
                setUser(user);
                setAuth(true);
                navigate('/posts');
            } else {
                setError('Invalid username or password');
            }
        } catch (error) {
            console.error('Error fetching users:', error);
            setError('An error occurred');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    );
};

export default Login;
