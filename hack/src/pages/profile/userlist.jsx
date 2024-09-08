import React from 'react';

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      <h2>Users Available for Chat</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <img src={user.profilePic} alt={user.name} className="user-profile-pic" />
            <span>{user.name}</span>
      
            <button onClick={() => initiateChat(user.id)}>Chat</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
