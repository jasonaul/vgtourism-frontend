
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    })


    const {name, email, password, passwordConfirm} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

// const handleChange = event => {
//     setMessage(event.target.value);
// }

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }
        if(isSuccess || user) {
            navigate('/')
        }
        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    const onSubmit =(e) => {
        e.preventDefault()
        if (password !== passwordConfirm) {
            toast.error("Passwords do not match.")
        } else {
            const userData = {
                name, 
                email, 
                password
            }

            dispatch(register(userData))
        }
    }

    if(isLoading) {
        return <Spinner />
    }

  return (
    <>
    <section class="register-heading">
        <h1>
            <FaUser /> Register
        </h1>
        <p class="register-p">Create an account for VGTourism</p>
    </section>

    <section class="registerForm">
        <form onSubmit={onSubmit}>
            <div class="form-group">
            <input 
                type='text'
                class="form-control"
                id='name' 
                name='name' 
                placeholder="Enter your preferred name" 
                onChange={onChange} 
                value={name} 
                
                
                    
                />
            </div>
            <div class="form-group">
            <input 
                type="email" 
                class="form-control" 
                id="email" 
                name='email' 
                value={email} 
                placeholder="Enter your e-mail address" 
                onChange={onChange} />
            </div>
            <div class="form-group">
            <input 
                type="password" 
                class="form-control" 
                id="password" 
                name='password' 
                value={password} 
                placeholder="Enter password" 
                onChange={onChange} />
            </div>
            <div class="form-group">
            <input 
            type="password" 
            class="form-control" 
            id="passwordConfirm" 
            name='passwordConfirm' 
            value={passwordConfirm} 
            placeholder="Confirm your password" 
            onChange={onChange} />
            </div>

            <div class="form-group">
                <button type="submit" class="btn-register btn-block">Submit</button>
            </div>
        </form>
        
    </section>
    </>
  )
}

export default Register