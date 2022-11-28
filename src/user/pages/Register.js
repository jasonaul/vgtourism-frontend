import React, {useContext, useState} from 'react'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators'
import Input from '../../shared/components/FormElements/Input';
import { useParams } from 'react-router-dom';
import Button from '../../shared/components/FormElements/Button';
import './Login.css'
import useFormHook from '../../shared/hooks/form';
import { LoggedIn } from '../../shared/context/loggedIn';
import ErrorMode from '../../shared/components/UIComponents/Error';
import Spinner from '../../shared/components/UIComponents/Spinner';
import { useHttp } from '../../shared/hooks/http';

const Register = () => {
    const auth = useContext(LoggedIn);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState();
    const {isLoading, error, requestSender, errorClearer} = useHttp();
    const [formState, inputHandler] = useFormHook({
        name: {
            value: '',
            isValid: false
        },
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    })

    const registerSubmitter = async event => {
        event.preventDefault();

        try {
            const responses = await requestSender(
                'http://localhost:8080/api/users/register', 'POST',
                JSON.stringify({
                    name: formState.inputs.name.value,
                    email: formState.inputs.email.value,
                    password: formState.inputs.password.value
                }),
                {
                    'Content-Type': 'application/json'
                }
            );
            auth.login(responses.userID, responses.token)
        } catch (err) {
            
        }
    }

    //     try {
    //         setIsLoading(true);
            
    //         const response = await fetch('http://localhost:8080/api/users/register', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             name: formState.inputs.name.value,
    //             email: formState.inputs.email.value,
    //             password: formState.inputs.password.value
    //         })
    //     });
    //     const responseGiven = await response.json();
    //     if (!response.ok) {
    //         throw new Error(responseGiven.message)
    //     }
    //     console.log(responseGiven)
    //     } catch (err) {
    //         console.log(err)
    //         setError(err.message || "An error is you")
    //     }
    //     setIsLoading(false);
    // }

    // const handleError = () => {
    //     setError(null);
    // }

    return (
        <>
        <ErrorMode error={error} onClear={errorClearer}/>
        {isLoading && <Spinner asOverlay/>}
            <h2>Create an Account</h2>
            <form onSubmit={registerSubmitter} className='register-form'>
                <Input element="input" className="input-info"
                    id="name"
                    type="text"
                    label="Preferred Display Name"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Please enter your preferred display name."
                    onInput={inputHandler} />
                <Input element="input" className="input-info" id="email" type="email" label="Email" validators={[VALIDATOR_EMAIL()]}
                    errorText="To create an account, please enter a valid email address." onInput={inputHandler}  />
                <Input element="input" className="input-info"  id="password" type="password" label="Password" validators={[VALIDATOR_MINLENGTH(7)]}
                errorText="Your password must be at least 7 characters." onInput={inputHandler}  />
                 <Button type="submit" disabled={!formState.isValid}>Register</Button>
            </form>
        </>
    )

}

export default Register