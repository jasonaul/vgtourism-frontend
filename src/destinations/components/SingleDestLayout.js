import React from "react";
import './SingleDestLayout.css'
import Card from "../../shared/components/UIComponents/Card";
import Map from "../../shared/components/UIComponents/Map";

const SingleDestLayout = props => {
    return (
<>
<div className="site-content" id="main-destination-content">
    <div className="prime-gap l-sitewidth s-down">
        <div className="DestoPageHeader">
            <div className="DestoPageHeader-header">
                <h1 className="Desto-title">{props.destinationName}</h1>
                <div class="Desto-meta">
                    <p className="Game-origin">{props.game}  <span className="Game-origin-info">{props.series} Series</span></p>      
                </div>

            </div>
        <div className="prime-gap zero">
            <div className="destination-header-image">
                <div className="media image positioned">
                    <img className="ingameimg1 positioned" alt={props.headline} src={props.ingameimg1}></img>
                </div>
            </div>
        <div className="prime-gap zero">
            <div className="grid-destination">
                <div className="inner-grid">
                    <div className="grid-main">
                        <div className="prime-gap l-sitewidth s-down">
                            <section className="headline-text">
                                <div className="headline-lead">
                                  <p className="headline">{props.headline}</p>  
                                </div>
                            </section>
                        </div>
                        <div className="article-main prime-gap l-sitewidth s-down">
                        <p className="article-text">
                            {props.description1}
                        </p>
                        <p className="article-text">
                            {props.description2}
                        </p>
                        <p className="article-text">
                            {props.description3}
                        </p>

                        </div>
                        <div className="gallery1">
                            <img className="img-gallery" src={props.image1}></img>
                            <img className="img-gallery" src={props.ingameimg1}></img>
                            <img className="img-gallery"  src={props.image2}></img>
                            <img className="img-gallery" src={props.ingameimg2}></img>
                            <img className="img-gallery"  src={props.image3}></img>
                            <img className="img-gallery" src={props.ingameimg3}></img>
                        </div>
                    </div>
                   
                </div>

                
               
            </div>
            <div className="map-container">
                    <p className="headline-lead">Discover the Area</p>
                    <Map center={props.coordinates} zoom={16}/>
                </div>
        </div>
       
        </div>
        
        </div>
        
    </div>
 
</div>



</>



    )};

export default SingleDestLayout


    //     <li>
    
    // <div className="destination-item-content">
    //     <div className="destination-item-image">
    //         <img src={props.image} alt={props.title} />
    //     </div>
    //     <div className="destination-item-info">
    //         <h2 className="d-item-title">{props.game}</h2>
    //         <h3 className="d-item-sub">{props.address}</h3>
    //         <p className="d-item-description">{props.description}</p>
    //     </div>
    //     <div className="destination-item-actions">
    //         <button>View on Map</button>
    //         <button>Edit Information</button>
    //         <button>Delete</button>
    //     </div>
    // </div>
    // </li>



//     <div class="img-row">
//     <div class="img-column">
//         <img className="extra-img" src={props.image1}></img>
//         <img className="extra-img" src={props.ingameimg1}></img>
//     </div>
//     <div class="img-column">
//         <img className="extra-img" src={props.image2}></img>
//         <img className="extra-img" src={props.ingameimg2}></img>
//     </div>
//     <div class="img-column">
//         <img className="extra-img" src={props.image3}></img>
//         <img className="extra-img" src={props.ingameimg3}></img>
//     </div>
// </div>