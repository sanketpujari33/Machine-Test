import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = ({ userId }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                const userPosts = response.data.filter(post => post.userId === userId);
                setPosts(userPosts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, [userId]);

    return (
        <div className="posts-container">
            <h2>Your Posts</h2>
            {posts.length > 0 ? (
                posts.map(post => (
                    <div key={post.id} className="post">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))
            ) : (
                <p className='nopost'>No posts available.</p>
            )}
        </div>
    );
};

export default Posts;
