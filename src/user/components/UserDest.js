import React from 'react';
import './UserDest.css'
import Avatar from '../../shared/components/UIComponents/Avatar';
import Card from '../../shared/components/UIComponents/Card';
import {Link} from 'react-router-dom'

const UserDest = props => {
    
    
    return (
        <li className="user-info">
            
            <Card className="user-info_content">
            <Link to={`/${props.id}/destinations`}>
                <div className="user-info_image">
                    <Avatar image={props.image} alt={props.name} />
                </div>
                <div className="user-info_info">
                    <h2>{props.name}</h2>
                    <h3>{props.destinations} {props.destinations === 1 ? 'Destination' : 'Destinations'} </h3>
                </div>
                </Link>
                </Card>
            
        </li>
    )
}

export default UserDest