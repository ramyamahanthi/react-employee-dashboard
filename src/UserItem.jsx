import React from "react";

const UserItem = React.memo(({ user, onClick }) => {
    console.log(`Rendering user: ${user.name}`);
    return <li onClick={() => onClick(user)}>{user.name}</li>;
});

export default UserItem;
