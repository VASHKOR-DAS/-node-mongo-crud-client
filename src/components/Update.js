import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedUser = useLoaderData();

    const handleUpdateUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const address = event.target.address.value;
        const user = {name, email, address};
        console.log(user);

        fetch(`http://localhost:5000/users/${storedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
            .then(data => {
               if (data.modifiedCount) {
                    alert('user updated');
                    console.log(data);
                }
            })



    }

    return (
        <div>
            <h2>Please Update : {storedUser.name} </h2>


            <form onSubmit={handleUpdateUser}>
                <input defaultValue={storedUser.name} type="text" name="name" placeholder='name' required />
                <br />
                <input defaultValue={storedUser.address} type="text" name="address" placeholder='address' required />
                <br />
                <input defaultValue={storedUser.email} type="email" name="email" placeholder='email' required />
                <br />
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default Update;