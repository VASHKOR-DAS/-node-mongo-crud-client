import React, { useState } from 'react';

const AddUser = () => {

    const [user, setUser] = useState({});
    const handleAddUser = event => {
        event.preventDefault();
        // const form = event.target;
        // const name = form.name.value;
        // const email = form.email.value;
        console.log(user);
    }

    // multiple field add krr easy way
    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user } // user state a ja ase sob copy korlam
        newUser[field] = value;
        setUser(newUser);
    }


    return (
        <div>
            <h2>Add User</h2>
            <form onSubmit={handleAddUser}>
                <input onBlur={handleInputBlur} type="text" name="name" placeholder='name' required />
                <br />
                <input onBlur={handleInputBlur} type="text" name="address" placeholder='address' required />
                <br />
                <input onBlur={handleInputBlur} type="email" name="email" placeholder='email' required />
                <br />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;