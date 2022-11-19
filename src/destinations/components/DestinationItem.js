import React, {useState} from "react";
import './DestinationItem.css'
import Card from "../../shared/components/UIComponents/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIComponents/Modal";
import Map from "../../shared/components/UIComponents/Map";

const DestinationItem = props => {
    const [showMap, setShowMap] = useState(false);
    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap (false)

    return (
        <React.Fragment>
            <Modal 
                show={showMap} 
                onCancel={closeMapHandler} 
                header={props.destinationName} contentClass="destination-item-modal-content" footerClass="destination-item-modal-actions" 
                footer={<Button onClick={closeMapHandler}>Close</Button>}
                >
                <div className="map-container">
                    <Map center={props.coordinates} zoom={16}/>
                </div>
            </Modal>
        <li className="destination-item">
    
    <Card className="destination-item-content">
        <div className="destination-item-image">
            <img src={props.ingameimg1} alt={props.title} />
        </div>
        <div className="destination-item-info">
            <h2 className="d-item-title">{props.destinationName}</h2>
            <h3 className="d-item-sub">{props.game}</h3>
            <p className="d-item-description">{props.headline}</p>
        </div>
        <div className="destination-item-actions">
            <Button inverse onClick={openMapHandler}>View on Map</Button>
            <Button to={`/destinations/${props.id}`}>Edit Information</Button>
            <Button danger >Delete</Button>
        </div>
    </Card>
    </li>

    </React.Fragment>
)};

export default DestinationItem