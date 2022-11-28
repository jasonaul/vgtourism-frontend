import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
    //allows us to get the destination's ID
import useFormHook from '../../shared/hooks/form';
import Spinner from '../../shared/components/UIComponents/Spinner';
import './UpdateDestination.css'
import { useHttpClient } from '../../shared/hooks/http';
import Map from '../../shared/components/UIComponents/Map';
import './OneDest.css'

const OneDest = () => {
    // const auth = useContext(LoggedIn)
    const { isLoading, error, sendRequest } = useHttpClient();
    const [loadedDestination, setLoadedDestination] = useState();
    const destID = useParams().destID;


const [ formDataSetter] = useFormHook({
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
    

// const updateSubmitHandler = async event => {
//     event.preventDefault();
    
//     try {
//         await sendRequest(
//             `http://localhost:5000/api/destinations/${destID}`, 'PATCH',
//             JSON.stringify({
//                 destinationName: formState.inputs.destinationName.value,
//                 headline: formState.inputs.headline.value,
//                 game: formState.inputs.game.value
//             }),
//             {
//                 'Content-Type': 'application/json'
//             }
//         );
//         // history.push('/' + auth.userID + '/destinations')
//     } catch (err) { }
// }

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
        <div className="site-content" id="main-destination-content">
            <div className="prime-gap l-sitewidth s-down">
                <div className="DestoPageHeader">
                    <div className="DestoPageHeader-header">
                        <h1 className="Desto-title">{loadedDestination.destinationName}</h1>
                        <div class="Desto-meta">
                            <p className="Game-origin">{loadedDestination.game}  <span className="Game-origin-info">{loadedDestination.series} Series</span></p>      
                        </div>
        
                    </div>
                <div className="prime-gap zero">
                    <div className="destination-header-image">
                        <div className="media image positioned">
                            <img className="ingameimg1 positioned" alt={loadedDestination.headline} src={loadedDestination.ingameimg1}></img>
                        </div>
                    </div>
                <div className="prime-gap zero">
                    <div className="grid-destination">
                        <div className="inner-grid">
                            <div className="grid-main">
                                <div className="prime-gap l-sitewidth s-down">
                                    <section className="headline-text">
                                        <div className="headline-lead">
                                          <p className="headline">{loadedDestination.headline}</p>  
                                        </div>
                                    </section>
                                </div>
                                <div className="article-main prime-gap l-sitewidth s-down">
                                <p className="article-text">
                                    {loadedDestination.description1}
                                    
                                </p>
                                <p className="article-text">
                                    {loadedDestination.description2}
                                </p>
                                <p className="article-text">
                                    {loadedDestination.description3}
                                </p>
        
                                </div>
                                <div className="gallery1">
                                    <img className="img-gallery" src={loadedDestination.image1}></img>
                                    <img className="img-gallery" src={loadedDestination.ingameimg1}></img>
                                    <img className="img-gallery"  src={loadedDestination.image2}></img>
                                    <img className="img-gallery" src={loadedDestination.ingameimg2}></img>
                                    <img className="img-gallery"  src={loadedDestination.image3}></img>
                                    <img className="img-gallery" src={loadedDestination.ingameimg3}></img>
                                </div>
                            </div>
                           
                        </div>
        
                        
                       
                    </div>
                    <div className="map-container">
                            <p className="headline-lead">Discover the Area</p>
                            <Map center={loadedDestination.coordinates} zoom={16}/>
                        </div>
                </div>
                {loadedDestination.latitude}{loadedDestination.longitude}
                </div>
               
                </div>
                
            </div>
         
        </div>
        
        
        
        </>
        
        
        
            )};

export default OneDest

