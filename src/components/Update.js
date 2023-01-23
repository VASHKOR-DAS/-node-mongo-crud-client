import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedUser = useLoaderData();

    const [user, setUser] = useState({storedUser});
    const handleUpdateUser = event => {
        event.preventDefault();
        // console.log(user);
        
        fetch(`http://localhost:5000/users/${storedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
            .then(data => {
               console.log(data);
            })



    }



    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user } // user state a ja ase sob copy korlam
        newUser[field] = value;
        setUser(newUser);
    }

    return (
        <div>
            <h2>Please Update : {storedUser.name} </h2>


            <form onSubmit={handleUpdateUser}>
                <input onChange={handleInputChange} defaultValue={storedUser.name} type="text" name="name" placeholder='name' required />
                <br />
                <input onChange={handleInputChange} defaultValue={storedUser.address} type="text" name="address" placeholder='address' required />
                <br />
                <input onChange={handleInputChange} defaultValue={storedUser.email} type="email" name="email" placeholder='email' required />
                <br />
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default Update;