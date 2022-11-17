import React from 'react';

import AllUsers from '../components/AllUsers';

function UsersPage () {
    const USERS = [
        {
        id: 'u1',
        name: 'Jason',
        image: 'https://i.imgur.com/Ioas0HD.png'
        }
];
    return <AllUsers items={USERS} />;
};

export default UsersPage;