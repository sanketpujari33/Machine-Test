import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './nav.css';

const Navbar = ({ setAuth, auth, user }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        setAuth(false);
        navigate('/posts');
    };

    return (
        <nav className="navbar">
            <span className="logo-container">
                <Link to="/" className='logo'><strong className='brand'>SP</strong><span className='blog'>Blog</span></Link>
            </span>
            {auth && (
                <ul className="nav-links">
                    <li><Link to={`/profile/${user.id}`}>Profile</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                </ul>
            )}
            <div className="btn-container">
                {!auth ? (
                    <Link to="/login">
                        <button type="button">Login</button>
                    </Link>
                ) : (
                    <button onClick={handleLogout}>Logout</button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
