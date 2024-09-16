import React from 'react';
const Profile = ({ user }) => {
    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-left">
                    <img src="https://img.freepik.com/premium-vector/collection-hand-drawn-profile-icons_1323905-5.jpg" alt="User Avatar" className="profile-avatar" />
                    <h2>{user.name}</h2>
                    <p>{user.username}</p>
                    <div className="edit-icon">
                        <span>&#9998;</span>
                    </div>
                </div>

                <div className="profile-right">
                    <div className="profile-info">
                        <h3>Information</h3>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p> <strong>Address : </strong>{user.address.street}, {user.address.suite}</p>
                        <p>{user.address.city}, {user.address.zipcode}</p>
                    </div>

                    <div className="profile-projects">
                        <h3>Projects</h3>
                        <div className="projects-row">
                            <div>
                                <p><strong>Website</strong></p>
                                <p>{user.website}</p>
                            </div>
                            <div>
                                <p><strong>Company</strong></p>
                                <p><strong>NAME :</strong></p>
                                <p>{user.company.name}</p>
                                <p><strong>Catch Phrase:</strong></p>
                                <p>{user.company.catchPhrase}</p>
                                <p><strong>BS:</strong></p>
                                <p>{user.company.bs}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Profile;
