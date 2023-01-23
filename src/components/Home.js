import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();

    const [displayUsers, setDisplayUsers] = useState(users);

    const handleDelete = user => {
        const agree = window.confirm(`Are you sure you want to delete: ${user.name}`)

        // agree thakle delete koro
        if (agree) {
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    if (data.deletedCount > 0) {
                        alert('User deleted successfully');

                        // user delete hobar por display te jotogulo user obosisto ase tader dekhao, allUsr er joto id ase tar konotar sathe (user._id) delete kora id ta milbe na, tar mane oita show o hobe na
                        const remainingUsers =
                            displayUsers.filter(allUsr => allUsr._id !== user._id);
                        setDisplayUsers(remainingUsers);
                    }
                });
        }
    }
    return (
        <div>
            <h2>Users: {displayUsers.length}</h2>
            <div>
                {
                    displayUsers.map(user => <p key={user._id}>
                        {user.name} {user.address} {user.email}
                        
                        <Link to={`/update/${user._id}`}>
                            <button>update</button>
                        </Link>

                        <button onClick={() => handleDelete(user)}>X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Home;