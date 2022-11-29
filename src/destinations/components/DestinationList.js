import React from "react";
import './DestinationList.css'
import Card from "../../shared/components/UIComponents/Card";
import Button from "../../shared/components/FormElements/Button";
import DestinationItem from "./DestinationItem";
// import { FaPlaceOfWorship } from "react-icons/fa";

const DestinationList = props => {
    // if (props.items.length === 0) {
        return (
            <React.Fragment>
        <div className="destination-list aligned">
            <Card>
                <h2>Add a New Destination!</h2>
                <Button to="/new">Add a New Destination</Button>
            </Card>

        </div>
        <div>
        <ul className="destination-list">
        {props.items.map(destination => 
            <DestinationItem 
                key={destination.id} 
                id={destination.id}
                series={destination.series} 
                game={destination.game} 
                console={destination.console} 
                releaseyear={destination.releaseyear} 
                destinationName={destination.destinationName} 
                experience={destination.experience} 
                city={destination.city}
                state={destination.state}
                country={destination.country} 
                continent={destination.continent}
                coordinates={destination.coordinates}
                latitude={destination.latitude}
                longitude={destination.longitude} 
                externalsite={destination.externalsite} 
                headline={destination.headline}
                description1={destination.description1} 
                description2={destination.description2} 
                description3={destination.description3}
                image1={destination.image1} 
                image2={destination.image2} 
                image3={destination.image3} 
                ingameimg1={destination.ingameimg1} 
                ingameimg2={destination.ingameimg2} 
                ingameimg3={destination.ingameimg3}
                creator={destination.creator}
                />
            )}
    </ul>


        </div></React.Fragment>
    );};

// }

     

export default DestinationList