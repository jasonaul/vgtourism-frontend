import React from "react";
import './DestinationList.css'
import Card from "../../shared/components/UIComponents/Card";
import DestinationItem from "./DestinationItem";
// import { FaPlaceOfWorship } from "react-icons/fa";

const DestinationList = props => {
    if (props.items.length === 0) {
        return (
        
        <div className="destination-list aligned">
            <Card>
                <h2>You haven't added any destinations yet!</h2>
                <button>Add a New Destination</button>
            </Card>

        </div>
    )}

    return <ul className="destination-list">
        {props.items.map(destination => 
            <DestinationItem 
                key={destination.id} 
                id={destination.id} 
                image={destination.image} 
                title={destination.title} 
                description={destination.description} 
                address={destination.address} 
                creatorId={destination.creator} 
                coordinates={destination.location}
                />
            )}
    </ul>

};

export default DestinationList