import React, {useEffect, useState} from 'react';
import {User} from "../user/user";
import {axiosService} from "../../service/axiosService";



const Users = () => {
    const [users, setUsers] = useState([])


    useEffect(()=> {
        axiosService.get(`/users`).then(value => value.data).then(value => setUsers([...value]))
    },[])

    return (
        <div>
            <h1>Posts:</h1>


            <hr/>
            <h1>Users:</h1>
                {users.map(user => <User key = {user.id} user = {user} />)}
        </div>
    );
};

export {
    Users
};