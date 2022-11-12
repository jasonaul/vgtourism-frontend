
import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    })

    const {name, email, password, passwordConfirm} = formData

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
            <FaUser /> Register
        </h1>
        <p class="register-p">Create an account for VGTourism</p>
    </section>

    <section class="registerForm">
        <form onSubmit={onSubmit}>
            <div class="form-group">
            <input type="text" class="form-control" id="name" name='name' value={name} placeholder="Enter your preferred name" onchange={onChange} />
            </div>
            <div class="form-group">
            <input type="email" class="form-control" id="email" name='email' value={email} placeholder="Enter your e-mail address" onchange={onChange} />
            </div>
            <div class="form-group">
            <input type="password" class="form-control" id="password" name='password' value={password} placeholder="Enter password" onchange={onChange} />
            </div>
            <div class="form-group">
            <input type="password" class="form-control" id="passwordConfirm" name='passwordConfirm' value={passwordConfirm} placeholder="Confirm your password" onchange={onChange} />
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