import React from "react";
import UserLists from "../components/UserLists";

const Users = () =>{
    const USERS = [
    {
        id : 'u1',
        name : 'Max Schwarz',
        image:'/images/homein.png',
        places : 3
    }
];
    return <UserLists items={USERS} />;
};

export default Users;