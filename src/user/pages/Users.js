import React, { useState, useEffect} from 'react';
import ErrorMode from '../../shared/components/UIComponents/Error';
import Spinner from '../../shared/components/UIComponents/Spinner';
import AllUsers from '../components/AllUsers';

function UsersPage () {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [usersLoaded, setUsersLoaded] = useState(false);
    useEffect(() => {
        const requestSender = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('http://localhost:8080/api/users')

                const responseData = await response.json();

                if(!response.ok) {
                    throw new Error(responseData.message);
                }
                setUsersLoaded(responseData.users)
                setIsLoading(false);
            } catch (err) {
               
                setError(err.message)
            }
            setIsLoading(false);
        }
       requestSender();
    }, [])

    const errorHandler = () => {
        setError(null);
    }

    return <>
    <ErrorMode error={error} onClear={errorHandler} />
    {isLoading && <div className='center'>
        <Spinner />
    </div>}
    {!isLoading && usersLoaded && <AllUsers items={usersLoaded} />};
    </>
};

export default UsersPage;



//     const USERS = [
//         {
//         id: 'u1',
//         name: 'Jason',
//         image: 'https://i.imgur.com/Ioas0HD.png'
//         }
// ];