import React, { useCallback} from 'react'
    // useCallback to avoid an infinite loop between NewDestination.js and Input.js, for our form.
import './NewDestination.css'
import Input from '../../shared/components/FormElements/Input'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH, VALIDATOR_MAXLENGTH, VALIDATOR_MIN, VALIDATOR_MAX } from '../../shared/util/validators'
    //Use the validator require in the fields which are required by the user before submission of data.

function NewDestination() {
    const titleChangeHandler = useCallback((id, value, isValid) => {
        
    }, []);

    const descriptionHandler = useCallback((id, value, isValid) => {
        
    }, []);

    return(
        <>
        <div class="headline-lead">
            <p>Enter Information for a New Destination</p>
        </div>
        <form className='register-form'>

        <Input 
        class="input-info" 
        element="input" 
        type="text" 
        label="Title" 
        validators={[VALIDATOR_REQUIRE()]}
         errorText="Enter a destination or experience name (i.e. City, State or City, Country)."
         onInput={titleChangeHandler}    
         />

        <Input 
        class="input-info" 
        id="headline"
        element="input" 
        type="textarea" 
        label="One-sentence Description" 
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(10)]}
         errorText="Enter a single sentence headline for this destination."
         onInput={titleChangeHandler}    
         />
        
        </form>
        </>
        )
};

export default NewDestination