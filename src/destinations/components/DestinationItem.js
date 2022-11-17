import React from "react";
import './DestinationItem.css'
import Card from "../../shared/components/UIComponents/Card";


const DestinationItem = props => {
    return (
        <li className="destination-item">
    
    <Card className="destination-item-content">
        <div className="destination-item-image">
            <img src={props.image} alt={props.title} />
        </div>
        <div className="destination-item-info">
            <h2 className="d-item-title">{props.title}</h2>
            <h3 className="d-item-sub">{props.address}</h3>
            <p className="d-item-description">{props.description}</p>
        </div>
        <div className="destination-item-actions">
            <button>View on Map</button>
            <button>Edit Information</button>
            <button>Delete</button>
        </div>
    </Card>
    </li>
)};

export default DestinationItem