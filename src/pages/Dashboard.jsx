import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import NewDestination from '../components/NewDestination'
import Spinner from '../components/Spinner'
import {getDestinations, reset} from '../features/destinations/destinationsSlice'

function Dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)
    const {destinations, isLoading, isError, message} = useSelector((state) => state.destinations)

    useEffect(() => {
        if(isError) {
            console.log(message);
        }

        if(!user) {
            navigate('/login')
        }
        dispatch(getDestinations())

        return () => {
            dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch])

    if(isLoading) {
        return <Spinner />
    }

    return <>

    <div>Dashboard</div>
    <NewDestination />
    </>
}

export default Dashboard