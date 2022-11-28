import React, { useState, useEffect} from 'react';
import ErrorMode from '../../shared/components/UIComponents/Error';
import Spinner from '../../shared/components/UIComponents/Spinner';
import AllUsers from '../components/AllUsers';
import { useHttpClient } from '../../shared/hooks/http';

function UsersPage () {

    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [loadedUsers, setLoadedUsers] = useState();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseInfo = await sendRequest('http://localhost:5001/api/users');
                setLoadedUsers(responseInfo.users);
            } catch (err) {
                
            }
        };
        fetchUsers();
    }, [sendRequest]);

    return (
        <>
            <ErrorMode error={error} onClear={clearError} />
            {isLoading && (
                <div className='center'>
                    <Spinner />
                </div>
            )}
            {!isLoading && loadedUsers && <AllUsers items={loadedUsers} />}
        </>
    )

    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(false);
    // const [usersLoaded, setUsersLoaded] = useState(false);
    // useEffect(() => {
    //     const sendRequest = async () => {
    //         setIsLoading(true);
    //         try {
    //             const response = await fetch('http://localhost:5001/api/users')

    //             const responseData = await response.json();

    //             if(!response.ok) {
    //                 throw new Error(responseData.message);
    //             }
    //             setUsersLoaded(responseData.users)
    //             setIsLoading(false);
    //         } catch (err) {
               
    //             setError(err.message)
    //         }
    //         setIsLoading(false);
    //     }
    //    sendRequest();
    // }, [])

    // const errorHandler = () => {
    //     setError(null);
    // }

    // return <>
    // <ErrorMode error={error} onClear={errorHandler} />
    // {isLoading && <div className='center'>
    //     <Spinner />
    // </div>}
    // {!isLoading && usersLoaded && <AllUsers items={usersLoaded} />};
    // </>
};

export default UsersPage;



//     const USERS = [
//         {
//         id: 'u1',
//         name: 'Jason',
//         image: 'https://i.imgur.com/Ioas0HD.png'
//         }
// ];