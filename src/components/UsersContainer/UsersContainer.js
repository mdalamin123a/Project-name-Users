import React, {useState} from 'react';
import './UsersContainer.css';
import Users from '../Users/Users';
import SelectedUsers from '../SelectedUsers/SelectedUsers';
import users from '../../fakeData/users';

const UsersContainer = () => {
    const [selectedUsers, setselectedUser] = useState([]);
    const handleSelectedUsers = (user) => {
        setselectedUser([...selectedUsers, user]);
    }
    return (
        <div className="users">
            <Users users = {users} handleSelectedUsers={handleSelectedUsers}></Users>
            <SelectedUsers users={selectedUsers}></SelectedUsers>
        </div>
    );
};

export default UsersContainer;