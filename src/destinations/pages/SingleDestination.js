import React from "react";
import './SingleDestination.css'
// import DestinationItem from "./DestinationItem";
import SingleDestLayout from "../components/SingleDestLayout";
import Card from "../../shared/components/UIComponents/Card";

const SingleDestination = props => {
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
            <SingleDestLayout 
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
                latitude={destination.latitude}
                longitude={destination.longitude} 
                creator={destination.creator}
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
                />
            )}
    </ul>

};

export default SingleDestination








// import React from "react";

// import DestinationList from "../components/DestinationList";

// const DUMMY_DESTINATIONS = [
//     {
//         id: 'd1',
//         title: 'Empire State Building',
//         description: 'A really famous building.',
//         image: 'https://i.imgur.com/KnSikdp.jpeg',
//         address: '20 W 34th St, New York, NY 10001',
//         location: {
//             lat: 40.7484405,
//             lng: -73.9878584
//         },
//         creator: 'u1'
//     },
//     {
//         id: 'd2',
//         title: 'Empire State Building',
//         description: 'A really famous building.',
//         image: 'https://i.imgur.com/KnSikdp.jpeg',
//         address: '20 W 34th St, New York, NY 10001',
//         location: {
//             lat: 40.7484405,
//             lng: -73.9878584
//         },
//         creator: 'u1'
//     },
// ]

// const SingleDestination = () => {
//     return <DestinationList items={DUMMY_DESTINATIONS}/>
// };

// export default SingleDestination