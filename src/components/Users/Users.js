import React from 'react';
import User from '../User/User';

const Users = props => {
    const users = props.users;
    return (
        <div>
            {users.map((user)=> <User key={user.id} user={user} handleSelectedUsers={props.handleSelectedUsers}></User>)}
        </div>
    );
};

export default Users;