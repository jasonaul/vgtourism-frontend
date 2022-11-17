import React from "react";
import { useParams } from 'react-router-dom';

import DestinationList from "../components/DestinationList";
import SingleDestination from "./SingleDestination";

const DUMMY_DESTINATIONS = [
    {
        id: 'd1',
        title: 'Ezio\'s Playhouse',
        description: 'A really famous building.',
        image: 'https://workleavebalance.files.wordpress.com/2014/07/dscf0725.jpg',
        address: 'Florence, Italy',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'd2',
        title: 'Hong Kong in Sleeping Dogs',
        description: 'A city.',
        image: 'https://i.imgur.com/https://coolmaterial.com/wp-content/uploads/2018/11/Hong-Kong-647x441.jpg.jpeg',
        address: 'Hong Kong',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    },
    {
        id: 'd3',
        title: 'THE STATIEST Empire State Building',
        description: 'A really famous building.',
        image: 'https://i.imgur.com/KnSikdp.jpeg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    },
    {
        id: 'd4',
        series: 'Mario',
        game: 'Super Mario 64',
        console: 'Nintendo 64',
        releaseyear: 1996,
        destinationName: 'Shibam, Yemen',
        experience: 'Destination',
        city: 'Shibam',
        state: '',
        country: 'Yemen',
        continent: 'Asia',
        latitude: 15.9176648,
        longitude: 48.6235893,
        creator: 'u3',
        externalsite: '',
        headline: 'Background Inspiration for Wet-Dry World',
        description1: 'Dummy description data. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        description3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image1: '',
        image2: '',
        image3: '',
        ingameimg1: '',
        ingameimg2: '',
        ingameimg3: '',
    },
]

const UserDestinations = () => {
    const userID = useParams().userID;
    const loadedDestinations = DUMMY_DESTINATIONS.filter(destination => destination.creator === userID);
    return <DestinationList items={loadedDestinations}/>
};

export const SingleDestinationDisplay = () => {
    const destID = useParams().destID;
    const loadedDestinations = DUMMY_DESTINATIONS.filter(destination => destination.id === destID);
    return <SingleDestination items={loadedDestinations}/>
}

// export const SingleDestination = () => {
//     return <DestinationList key={DUMMY_DESTINATIONS.id}/>
// }

// export const SingleDestination = React.createClass({
//     render: function() {
//         const selectedID = this.props.selectedID
//         const destinationPage = this.props.DUMMY_DESTINATIONS.reduce(function(destination, current) {
//             return destination.id == selectedID ? current : destination;
//         }, undefined);

//         return (
//             <DestinationList headline={destinationPage.title} key={destinationPage.id}>
//                 {destinationPage.description}
//             </DestinationList>
//         );
//     }
//     }
// )

export default UserDestinations