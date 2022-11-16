import axios from 'axios'

const API_URL = '/api/destinations/'

//Create new destination

const createDestination = async (destinationData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, destinationData, config)

    return response.data
}

//Get destinations

const getDestinations = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, config)

    return response.data
}

const destinationService = {
    createDestination,
    getDestinations
}

export default destinationService