import React, {useState} from 'react';
import './User.css';

const User = props => {
    const user = props.user;
    const [phone, setPhone] = useState(null);

    const handlePhoneclick = (event) => {
        event.stopPropagation();
        setPhone(<p>Phone: {user.phone}</p>);
    }

    return (
        <div style={props.isSelected ? {borderColor: 'blue'} : {}} className="user" onClick={!props.isSelected ? ()=>props.handleSelectedUsers(props.user) : ()=>false}>
            <div className="image">
                <img src={user.image} alt="" />
            </div>
            <div className="info">
                <h2>Name: {user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Website: {user.website}</p>
                {phone || <button onClick={handlePhoneclick}>Show phone number</button>}
            </div>
        </div>
    );
};

export default User;