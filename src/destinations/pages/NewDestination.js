import React, { useCallback, useReducer } from 'react'
    // useCallback to avoid an infinite loop between NewDestination.js and Input.js, for our form.
import './NewDestination.css'
import Input from '../../shared/components/FormElements/Input'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH, } from '../../shared/util/validators'
    //Use the validator require in the fields which are required by the user before submission of data.
import Button from '../../shared/components/FormElements/Button'

const reducerForForm = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let validForm = true;
            for (const input in state.inputs) {
                if (input === action.input) {
                    validForm = validForm && action.isValid;
                } else {
                    validForm = validForm && state.inputs[input].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.input]: {value: action.value, isValid: action.isValid}
                },
                isValid: validForm
            };
        default: 
            return state;
    }
};    

function NewDestination() {
    const [formState, dispatch] = useReducer(reducerForForm, {
        inputs: {
            destinationName: {
                value: '',
                isValid: false
            }, 
            headline: {
                value: '',
                isValid: false
            }, 
        },
        isValid: false
        // isValid stores info if overall form is Valid. Inputs stores info on the validity of inputs.
            //and this is initial state above.
    });

    const formHandler = useCallback((id, value, isValid) => {
        dispatch({type: 'INPUT_CHANGE', value: value, isValid: isValid, input: id})
    }, []);

    // const headlineHandler = useCallback((id, value, isValid) => {
        
    // }, []);

    const submissionHandler = event => {
        event.preventDefault();
            //preventing the default of reloading the page before info can be sent and crashes the session...
        console.log(formState.inputs);
    }

    return(
        <>
        <div className="headline-lead">
            <p>Enter Information for a New Destination</p>
        </div>
        <form className='register-form' onSubmit={submissionHandler}>

        <Input 
        id="destinationName" 
        className="input-info"
        
        element="input" 
        type="text" 
        label="Title" 
        validators={[VALIDATOR_REQUIRE()]}
         errorText="Enter a destination or experience name (i.e. City, State or City, Country)."
         onInput={formHandler}    
         />

        <Input 
        id="headline"
        className="input-info"         
        element="textarea" 
        label="One-sentence Description" 
        validators={[VALIDATOR_MINLENGTH(10)]}
         errorText="Enter a single sentence headline for this destination."
         onInput={formHandler}    
         />

        <Input 
        id="game" 
        className="input-info"
        
        element="input" 
        type="text" 
        label="Game Name" 
        validators={[VALIDATOR_REQUIRE()]}
         errorText="Enter the name of the game this destination is featured in."
         onInput={formHandler}    
         />

        <Input 
        id="series" 
        className="input-info"
        
        element="input" 
        type="select" 
        label="Game Series" 
        validators={[VALIDATOR_REQUIRE()]}
         errorText="Select the series this game is from."
         onInput={formHandler}    
         />

         

        <Button type="submit" 
        disabled={!formState.isValid} 
            //I can't figure out why this isn'tt working. I went through some tutorials and looked on StackOverflow, and it certainly appears as though everythins is coded correctly. Disabling for now, until I can fix.
                //Fixed. Typo. Still leaving this note in.
        >Add Destination</Button>
        </form>
        </>
        )
};

export default NewDestination