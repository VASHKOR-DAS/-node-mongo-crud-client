import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const storedUser = useLoaderData();

    return (
        <div>
            <h2>Please Update : {storedUser.name} </h2>
        </div>
    );
};

export default Update;