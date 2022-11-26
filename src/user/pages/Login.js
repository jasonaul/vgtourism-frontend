import React, {useState, useContext} from 'react'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../shared/util/validators'
import Input from '../../shared/components/FormElements/Input';
import { LoggedIn } from '../../shared/context.js/loggedIn';
// import { useParams } from 'react-router-dom';
import Button from '../../shared/components/FormElements/Button';
import ErrorMode from '../../shared/components/UIComponents/Error';
import Spinner from '../../shared/components/UIComponents/Spinner';
import './Login.css'
import useFormHook from '../../shared/hooks/form';
import {useLocation} from 'react-router-dom'



const Login = () => {
    const auth = useContext(LoggedIn);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [formState, inputHandler] = useFormHook({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    })

    const loginSubmitter = async event => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:8080/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: formState.inputs.email.value,
                password: formState.inputs.password.value
            })
        });

        const responseLogin = await response.json();
        if (!response.ok) {
            throw new Error(responseLogin.message)
        }
        setIsLoading(false)
        auth.login();
        console.log(responseLogin)
        
        } catch (err) {
            setIsLoading(false)
            setError(err.message || "An error is you.")
        }
        
                
    }

    const handleError = () => {
        setError(null);
    }

    return (
        <>
    <ErrorMode error={error} onClear={handleError}/>
    { isLoading && <Spinner asOverlay/>}

    <h2>Login to Your Account</h2>
    <form onSubmit={loginSubmitter} className='register-form' >
        <Input element="input" className="input-info" id="email" type="email" label="Email" validators={[VALIDATOR_EMAIL()]}
           errorText="To login to an account, please enter a valid email address." onInput={inputHandler}  />
           <Input element="input" className="input-info"  id="password" type="password" label="Password" validators={[VALIDATOR_MINLENGTH(7)]}
           errorText="Please enter a valid password." onInput={inputHandler}  />
           <Button type="submit" disabled={!formState.isValid}>Login</Button>
    </form>
    </>  )
};

export default Login