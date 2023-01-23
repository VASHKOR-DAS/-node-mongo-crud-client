import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>Users: {users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>
                        {user.name} {user.address} {user.email}
                    </p>)
                }
            </div>
        </div>
    );
};

export default Home;