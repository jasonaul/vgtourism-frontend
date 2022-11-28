import React, { useState, useContext } from 'react';
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Spinner from "../../shared/components/UIComponents/Spinner";
import ErrorMode from "../../shared/components/UIComponents/Error";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import useFormHook from "../../shared/hooks/form";
import { useHttpClient } from "../../shared/hooks/http";
import { LoggedIn } from "../../shared/context/loggedIn";
import './Register.css'
import Card from "../../shared/components/UIComponents/Card";

const Authentify = () => {
    const auth = useContext(LoggedIn);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const {isLoading, error, sendRequest, clearError} = useHttpClient();

    const [formState, inputHandler, dataSetter] = useFormHook(
        {
            email: {
                value: '',
                isValid: false
              },
              password: {
                value: '',
                isValid: false
              }
        },
            false
    );

    const modeSwitcher = () => {
        if (!isLoginMode) {
            dataSetter(
              {
                ...formState.inputs,
                name: undefined,
                image: undefined
              },
              formState.inputs.email.isValid && formState.inputs.password.isValid
            );
          } else {
            dataSetter(
              {
                ...formState.inputs,
                name: {
                  value: '',
                  isValid: false
                },
                // image: {
                //   value: null,
                //   isValid: false
                // }
              },
              false
            );
          }
          setIsLoginMode(prevMode => !prevMode);
        };

    const authSubmitter = async event => {
        event.preventDefault();
        // setIsLoading(true);
        if (isLoginMode) {
        try {
            const responseInfo = await sendRequest(
                'http://localhost:5001/api/users/login', 'POST',
                JSON.stringify({
                    email: formState.inputs.email.value,
                    password: formState.inputs.password.value
                }),
                {
                    'Content-Type': 'application/json'
                }
            );
            auth.login(responseInfo.userID, responseInfo.token)
            // console.log(responseInfo)
        } catch (err) {}
    } else {
        try {
            const responseInfo = await sendRequest(
                'http://localhost:5001/api/users/register', 'POST',
                JSON.stringify({
                    name: formState.inputs.name.value,
                    email: formState.inputs.email.value,
                    password: formState.inputs.password.value
                }),
                {
                    'Content-Type': 'application/json'
                }
            );
            auth.login(responseInfo.userID, responseInfo.token)
        } catch (err) {
            
        }
    }
      
    };

    return (
        <React.Fragment>
      <ErrorMode error={error} onClear={clearError} />
      <Card className="authentication">
        {isLoading && <Spinner asOverlay />}
        <h2>Login Required</h2>
        <hr />
        <form onSubmit={authSubmitter}>
          {!isLoginMode && (
            <Input
              element="input"
              id="name"
              type="text"
              label="Your Name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a name."
              onInput={inputHandler}
            />
          )}
          {/* {!isLoginMode && (
            <ImageUpload
              center
              id="image"
              onInput={inputHandler}
              errorText="Please provide an image."
            />
          )} */}
          <Input
            element="input"
            id="email"
            type="email"
            label="E-Mail"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please enter a valid password, at least 7 characters."
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            {isLoginMode ? 'LOGIN' : 'SIGNUP'}
          </Button>
        </form>
        <Button inverse onClick={modeSwitcher}>
          SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
        </Button>
      </Card>
    </React.Fragment>
    )
          }

export default Authentify
