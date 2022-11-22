import React from 'react'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../shared/util/validators'
import Input from '../../shared/components/FormElements/Input';
import { useParams } from 'react-router-dom';
import Button from '../../shared/components/FormElements/Button';
import './Login.css'
import useFormHook from '../../shared/hooks/form';

const Login = () => {

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

    const loginSubmitter = event => {
        event.preventDefault();
        console.log(formState.inputs)
    }

    return (
        <>
    <h2>Create an Account</h2>
    <form onSubmit={loginSubmitter} className='register-form' >
        <Input element="input" className="input-info" id="email" type="email" label="Email" validators={[VALIDATOR_EMAIL()]}
           errorText="To create an account, please enter a valid email address." onInput={inputHandler}  />
           <Input element="input" className="input-info"  id="password" type="password" label="Password" validators={[VALIDATOR_MINLENGTH(7)]}
           errorText="Your password must be at least 7 characters." onInput={inputHandler}  />
           <Button type="submit" disabled={!formState.isValid}>Login</Button>
    </form>
    </>  )
};

export default Login