import React from "react";
import './SingleDestLayout.css'
import Card from "../../shared/components/UIComponents/Card";


const SingleDestLayout = props => {
    return (
        <li>
    
    <div className="destination-item-content">
        <div className="destination-item-image">
            <img src={props.image} alt={props.title} />
        </div>
        <div className="destination-item-info">
            <h2 className="d-item-title">{props.game}</h2>
            <h3 className="d-item-sub">{props.address}</h3>
            <p className="d-item-description">{props.description}</p>
        </div>
        <div className="destination-item-actions">
            <button>View on Map</button>
            <button>Edit Information</button>
            <button>Delete</button>
        </div>
    </div>
    </li>
)};

export default SingleDestLayout