import React, { useEffect, useState, useContext} from 'react';
import { useParams, useHistory } from 'react-router-dom'
    //allows us to get the destination's ID
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import useFormHook from '../../shared/hooks/form';
import Spinner from '../../shared/components/UIComponents/Spinner';
import ErrorMode from '../../shared/components/UIComponents/Error';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import './UpdateDestination.css'
import { useHttpClient } from '../../shared/hooks/http';
import { LoggedIn } from '../../shared/context/loggedIn';


const UpdateDestination = () => {
    const auth = useContext(LoggedIn)
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedDestination, setLoadedDestination] = useState();
    const destID = useParams().destID;
    const history = useHistory();

const [formState, formHook, formDataSetter] = useFormHook({
        destinationName: {
            value: '',
            // chosenDestination.destinationName,
            isValid: false
            // true
        },
        headline: {
            value: '',
            // chosenDestination.headline,
            isValid: false
            //true
        },
        game: {
            value: '',
            isValid: false
        }
    }, false);

    useEffect(() => {
        const fetchDestination = async () => {
        try {
            const responses = await sendRequest(`http://localhost:5001/api/destinations/${destID}`);
            setLoadedDestination(responses.destination)
            formDataSetter(
                {
                destinationName: {
                    value: responses.destination.destinationName,
                    // chosenDestination.destinationName,
                    isValid: true
                    // true
                },
                headline: {
                    value: responses.destination.headline,
                    // chosenDestination.headline,
                    isValid: true
                    //true
                },
                game: {
                    value: responses.destination.game,
                    isValid: true
                }
                }, 
                true);
            } catch (err) {}
        } ;   fetchDestination();
             }, [sendRequest, destID, formDataSetter])
    

const updateSubmitHandler = async event => {
    event.preventDefault();
    try {
        await sendRequest(
            `http://localhost:5001/api/destinations/${destID}`, 'PATCH',
            JSON.stringify({
                destinationName: formState.inputs.destinationName.value,
                headline: formState.inputs.headline.value,
                game: formState.inputs.game.value
            }),
            {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + auth.token
            }
        );
        // history.push('/' + auth.userID + '/destinations')
        history.push('/users')
    } catch (err) { }
}

    if (isLoading) {
        return (
            <div className='center'>
                <Spinner />
            </div>
        )
    }

    if (!loadedDestination && !error) {
        return (
        <div className='center'>
            <h2>Could not find this destination!</h2>
        </div>
    )}


    return (
        <>
        <ErrorMode error={error} onClear={clearError} />
       {!isLoading && loadedDestination &&  <form className='register-form' onSubmit={updateSubmitHandler}>
    <Input 
        id="destinationName" 
        element="text" 
        type="text" 
        label="Destination Name" 
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a name for this destination." 
        onInput={formHook}
        trasnferedValue={loadedDestination.destinationName}
        transferedValid={true}
        // trasnferedValue={formState.inputs.destinationName.value}
        // transferedValid={formState.inputs.destinationName.isValid}
        />

    <Input 
        id="headline" 
        element="textarea" 
        type="text" 
        label="One-sentence Description" 
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a short-and-sweet description." 
        onInput={formHook}
        trasnferedValue={loadedDestination.headline}
        transferedValid={true}
        // trasnferedValue={formState.inputs.headline.value}
        // transferedValid={formState.inputs.destinationName.isValid}
        />
    
    <Input 
        id="game" 
        element="textarea" 
        type="text" 
        label="Game Title" 
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Title of the Game in which the destination is featured." 
        onInput={formHook}
        trasnferedValue={loadedDestination.game}
        transferedValid={true}
        // trasnferedValue={formState.inputs.headline.value}
        // transferedValid={formState.inputs.destinationName.isValid}
        />

        <Button type="submit" disabled={!formState.isValid}>Update Destination</Button>
    </form>}</>
)};

export default UpdateDestination






    // const DUMMY_DESTINATIONS = [
    //     {
    //         id: 'd1',
    //         series: 'Assasin\'s Creed',
    //         game: 'Assasin\'s Creed',
    //         console: 'PS3',
    //         releaseyear: 2009,
    //         destinationName: 'Ezio\'s Playhouse',
    //         experience: 'Destination',
    //         city: 'Florence',
    //         state: '',
    //         country: 'Italy',
    //         continent: 'Europe',
    //         coordinates: {
    //             lat: 40.7484405,
    //             lng: -73.9878584
    //         },
    //         headline: 'A really famous building.',
    //         externalsite: '',
    //     headline: 'Background Inspiration for Wet-Dry World.',
    //     description1: 'Dummy description data. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //     description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //     description3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //     image1: 'https://workleavebalance.files.wordpress.com/2014/07/dscf0725.jpg',
    //     image2: 'https://hiddenarchitecture.net/wp-content/uploads/2016/01/shibam_01-1.jpg',
    //     image3: 'https://hiddenarchitecture.net/wp-content/uploads/2016/01/shibam_01-1.jpg',
    //     ingameimg1: 'https://workleavebalance.files.wordpress.com/2014/07/dscf0725.jpg',
    //     ingameimg2: 'https://preview.redd.it/v6gfeuoz3ou51.jpg?width=960&crop=smart&auto=webp&s=6f3539668a3fc55bcd9fffb228256780308e3230',
    //     ingameimg3: 'https://preview.redd.it/v6gfeuoz3ou51.jpg?width=960&crop=smart&auto=webp&s=6f3539668a3fc55bcd9fffb228256780308e3230',
    //         creator: 'u1'
    //     },
    //     {
    //         id: 'd2',
    //         title: 'Hong Kong in Sleeping Dogs',
    //         description: 'A city.',
    //         image: 'https://i.imgur.com/https://coolmaterial.com/wp-content/uploads/2018/11/Hong-Kong-647x441.jpg.jpeg',
    //         address: 'Hong Kong',
    //         coordinates: {
    //             lat: 40.7484405,
    //             lng: -73.9878584
    //         },
    //         creator: 'u2'
    //     },
    //     {
    //         id: 'd3',
    //         title: 'THE STATIEST Empire State Building',
    //         description: 'A really famous building.',
    //         image: 'https://i.imgur.com/KnSikdp.jpeg',
    //         address: '20 W 34th St, New York, NY 10001',
    //         coordinates: {
    //             lat: 40.7484405,
    //             lng: -73.9878584
    //         },
    //         creator: 'u2'
    //     },
    //     {
    //         id: 'd4',
    //         series: 'Mario',
    //         game: 'Super Mario 64',
    //         console: 'Nintendo 64',
    //         releaseyear: 1996,
    //         destinationName: 'Shibam, Yemen',
    //         experience: 'Destination',
    //         city: 'Shibam',
    //         state: '',
    //         country: 'Yemen',
    //         continent: 'Asia',
    //         coordinates: {
    //             lat: 15.9176648,
    //             lng: 48.6235893,
    //         },
    //         latitude: '15.9176648',
    //         longitude: '48.6235893',
    //         creator: 'u3',
    //         externalsite: '',
    //         headline: 'Background Inspiration for Wet-Dry World.',
    //         description1: 'Dummy description data. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //         description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //         description3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //         image1: 'https://hiddenarchitecture.net/wp-content/uploads/2016/01/shibam_01-1.jpg',
    //         image2: 'https://hiddenarchitecture.net/wp-content/uploads/2016/01/shibam_01-1.jpg',
    //         image3: 'https://hiddenarchitecture.net/wp-content/uploads/2016/01/shibam_01-1.jpg',
    //         ingameimg1: 'https://preview.redd.it/v6gfeuoz3ou51.jpg?width=960&crop=smart&auto=webp&s=6f3539668a3fc55bcd9fffb228256780308e3230',
    //         ingameimg2: 'https://preview.redd.it/v6gfeuoz3ou51.jpg?width=960&crop=smart&auto=webp&s=6f3539668a3fc55bcd9fffb228256780308e3230',
    //         ingameimg3: 'https://preview.redd.it/v6gfeuoz3ou51.jpg?width=960&crop=smart&auto=webp&s=6f3539668a3fc55bcd9fffb228256780308e3230',
    //     },
    // ]