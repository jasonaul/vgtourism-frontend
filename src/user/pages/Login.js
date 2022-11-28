import React, { useContext} from 'react'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../shared/util/validators'
import Input from '../../shared/components/FormElements/Input';
import { LoggedIn } from '../../shared/context/loggedIn';
import { useHttpClient } from '../../shared/hooks/http';
// import { useParams } from 'react-router-dom';
import Button from '../../shared/components/FormElements/Button';
import ErrorMode from '../../shared/components/UIComponents/Error';
import Spinner from '../../shared/components/UIComponents/Spinner';
import './Login.css'
import useFormHook from '../../shared/hooks/form';



const Login = () => {
    const auth = useContext(LoggedIn);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState();
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
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
        // setIsLoading(true);

            try {
                const responses = await sendRequest(
                    'http://localhost:5001/api/users/login', 'POST',
                    JSON.stringify({
                        email: formState.inputs.email.value,
                        password: formState.inputs.password.value
                    }),
                    {
                        'Content-Type': 'application/json'
                    }
                );
                auth.login(responses.userID, responses.token)
                console.log(responses)
            } catch (err) {}


    }



    return (
        <>
    <ErrorMode error={error} onClear={clearError}/>
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