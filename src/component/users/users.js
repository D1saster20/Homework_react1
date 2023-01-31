import React, {useState} from 'react';
import axios from "axios";
;

const Users = () => {
    const [users, setUsers] = useState([])
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(value => value.data).then(value => setUsers({value}))
    return (
        <div>
            
        </div>
    );
};

export {
    Users
};