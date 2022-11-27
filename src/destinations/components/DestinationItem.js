import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import './DestinationItem.css'
import Card from "../../shared/components/UIComponents/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIComponents/Modal";
import Map from "../../shared/components/UIComponents/Map";
import ErrorMode from "../../shared/components/UIComponents/Error";
import Spinner from "../../shared/components/UIComponents/Spinner";
import { useHttp } from "../../shared/hooks/http";

const DestinationItem = props => {
    const {isLoading, error, requestSender, errorClearer} = useHttp();
    const [showMap, setShowMap] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const history = useHistory();

    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap (false)

    const showDeleteWarning = () => {
        setDeleteModal(true);
    }

    const cancelDelete = () => {
        setDeleteModal(false);
    }

    const deletionConfirmation = async () => {
        setDeleteModal(false);
        try {
            await requestSender(`http://localhost:8080/api/destinations/${props.id}`, 'DELETE');
            props.onDelete(props.id)
            // history.push(`/users`)
        } catch (err) {}
        

    }

    return (
        <React.Fragment>
        <ErrorMode error={error} onClear={errorClearer} />
            <Modal 
                show={showMap} 
                onCancel={closeMapHandler} 
                header={props.destinationName} contentClass="destination-item-modal-content" footerClass="destination-item-modal-actions" 
                footer={<Button onClick={closeMapHandler}>Close</Button>}
                >
                <div className="map-container">
                    <Map center={props.coordinates} zoom={15}/>
                </div>
            </Modal>
            
            <Modal show={deleteModal} onCancel={cancelDelete} header="Delete this Destination" footerClass="delete-footer-class" 
                footer={
                <React.Fragment>
                    
                </React.Fragment>
            }>
                <p className="delete-space">Are you sure you want to delete this destination? This action cannot be undone!</p>
                <p className="delete-footer-class">
                <Button inverse onClick={cancelDelete} className="delete-buttons">Cancel</Button>
                    <Button danger onClick={deletionConfirmation} className="delete-buttons" >Delete</Button>
                    </p>
            </Modal>
        <li className="destination-item">
    
    <Card className="destination-item-content">
    {isLoading && <Spinner asOverlay />}
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
            <Button to={`/destinations/${props.id}/edit`}>Edit Information</Button>
            <Button danger onClick={showDeleteWarning}>Delete</Button>
        </div>
    </Card>
    </li>

    </React.Fragment>
)};

export default DestinationItem