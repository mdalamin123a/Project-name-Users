import React from 'react';
import User from '../User/User';

const SelectedUsers = (props) => {
    const users = props.users;
    return (
        <div>
            <h1>Selected Users: {users.length}</h1>
            {
                users.map((user)=><User isSelected={true} key={user.id} user={user} ></User>)
            }
        </div>
    );
};

export default SelectedUsers;