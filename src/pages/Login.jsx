
import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const {email, password} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit =(e) => {
        e.preventDefault()
    }
  return (
    <>
    <section class="register-heading">
        <h1>
            <FaSignInAlt /> Login
        </h1>
        <p class="register-p">Login and Explore</p>
    </section>

    <section class="registerForm">
        <form onSubmit={onSubmit}>
            <div class="form-group">
            <input type="email" class="form-control" id="email" name='email' value={email} placeholder="Enter your e-mail address" onchange={onChange} />
            </div>
            <div class="form-group">
            <input type="password" class="form-control" id="password" name='password' value={password} placeholder="Enter password" onchange={onChange} />
            </div>

            <div class="form-group">
                <button type="submit" class="btn-register btn-block">Submit</button>
            </div>
        </form>
        
    </section>
    </>
  )
}

export default Login