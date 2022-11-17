import React from 'react';
import './AllUsers.css'
import UserDest from './UserDest';
import Card from '../../shared/components/UIComponents/Card';

const AllUsers = props => {
    if (props.items.length === 0) {
        return (<div className="aligned">
        <Card>
            <h2>No Users Found.</h2>
            </Card>
        </div>
        );
    }

    // return (
    //      <ul className="allUsers">
    //     {props.items.map(user => (
    //         <UserDest 
    //         key={user.id} 
    //         id={user.id} 
    //         image={user.image} 
    //         name={user.name} 
    //         destinationCount={user.destinations} 
    //         />
    //     ))}
    // </ul>
    // );

    
    
    return (
        <ul className="allUsers">
       {props.items.map(user => (
           <UserDest 
           key={user.id} 
           id={user.id} 
           image={user.image} 
           name={user.name} 
           destinationCount={user.destinations} 
           />
       ))}
   </ul>
   );

};

export default AllUsers