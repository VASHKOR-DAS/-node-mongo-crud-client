import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();

    const handleDelete = user => {
        const agree = window.confirm(`Are you sure you want to delete: ${user.name}`)

        // agree thakle delete koro
        if (agree) {
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data));
        }
    }
    return (
        <div>
            <h2>Users: {users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>
                        {user.name} {user.address} {user.email} <button onClick={() => handleDelete(user)}>X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Home;