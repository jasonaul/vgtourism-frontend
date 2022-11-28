import React, {  useContext } from 'react'
    // useCallback to avoid an infinite loop between NewDestination.js and Input.js, for our form.
import { useHistory } from 'react-router-dom'
import useFormHook from '../../shared/hooks/form'
    // Allows us to share stateful logic, specifically using it to re-render for our Update form.
import './NewDestination.css'
import ErrorMode from '../../shared/components/UIComponents/Error'
import Spinner from '../../shared/components/UIComponents/Spinner'
import Input from '../../shared/components/FormElements/Input'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH, } from '../../shared/util/validators'
    //Use the validator require in the fields which are required by the user before submission of data.
import Button from '../../shared/components/FormElements/Button'
import { useHttpClient } from '../../shared/hooks/http'
import { LoggedIn } from '../../shared/context/loggedIn'

function NewDestination() {
    const auth = useContext(LoggedIn)
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [formState, formHandler] = useFormHook(
        {
            destinationName: {
                value: '',
                isValid: false
            }, 
            headline: {
                value: '',
                isValid: false
            }, 
            game: {
                value: '',
                isValid: false
            }, 
            series: {
                value: '',
                isValid: false
            }, 
            city: {
                value: '',
                isValid: false
            }, 
            country: {
                value: '',
                isValid: false
            }
        },
        false
    );

    const history = useHistory();


    // const headlineHandler = useCallback((id, value, isValid) => {
        
    // }, []);

    const submissionHandler = async event => {
        event.preventDefault();
            //preventing the default of reloading the page before info can be sent and crashes the session...

    try {
        const formData = new FormData();
        formData.append('destinationName', formState.inputs.destinationName.value);
        formData.append('headline', formState.inputs.headline.value);
        formData.append('game', formState.inputs.game.value);
        formData.append('series', formState.inputs.series.value);
        formData.append('city', formState.inputs.city.value);
        formData.append('country', formState.inputs.country.value);
        formData.append('creator', auth.userID)
        console.log(formData)
        await sendRequest('http://localhost:5001/api/destinations', 'POST', formData, {
            Authorization: 'Bearer ' + auth.token
          });
        history.push('/')
    } catch (err) {
        
    }

    }

    return(
        <>
        <ErrorMode error={error} onClear={clearError} />
        <div className="headline-lead">
            <p>Enter Information for a New Destination</p>
        </div>
        <form className='register-form' onSubmit={submissionHandler}>
            {isLoading && <Spinner asOverlay />}
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
        type="text" 
        label="Game Series" 
        validators={[VALIDATOR_REQUIRE()]}
         errorText="Select the series this game is from."
         onInput={formHandler}    
         />
        <Input 
        id="city" 
        className="input-info"
        
        element="input" 
        type="text" 
        label="City" 
        validators={[VALIDATOR_REQUIRE()]}
         errorText="Select this destination's city"
         onInput={formHandler}    
         />
        <Input 
        id="country" 
        className="input-info"
        
        element="input" 
        type="country" 
        label="Country" 
        validators={[VALIDATOR_REQUIRE()]}
         errorText="Select this destination's country."
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









// function NewDestination() {

//     const [formState, formHandler] = useFormHook(
//         {
//             destinationName: {
//                 value: '',
//                 isValid: false
//             }, 
//             headline: {
//                 value: '',
//                 isValid: false
//             }, 
//             game: {
//                 value: '',
//                 isValid: false
//             }, 
//             series: {
//                 value: '',
//                 isValid: false
//             }, 
//         },
//         false
//     );


//     // const headlineHandler = useCallback((id, value, isValid) => {
        
//     // }, []);

//     const submissionHandler = event => {
//         event.preventDefault();
//             //preventing the default of reloading the page before info can be sent and crashes the session...
//         console.log(formState.inputs);
//     }

//     return(
//         <>
//         <div className="headline-lead">
//             <p>Enter Information for a New Destination</p>
//         </div>
//         <form className='register-form' onSubmit={submissionHandler}>

//         <Input 
//         id="destinationName" 
//         className="input-info"
        
//         element="input" 
//         type="text" 
//         label="Title" 
//         validators={[VALIDATOR_REQUIRE()]}
//          errorText="Enter a destination or experience name (i.e. City, State or City, Country)."
//          onInput={formHandler}    
//          />

//         <Input 
//         id="headline"
//         className="input-info"         
//         element="textarea" 
//         label="One-sentence Description" 
//         validators={[VALIDATOR_MINLENGTH(10)]}
//          errorText="Enter a single sentence headline for this destination."
//          onInput={formHandler}    
//          />

//         <Input 
//         id="game" 
//         className="input-info"
        
//         element="input" 
//         type="text" 
//         label="Game Name" 
//         validators={[VALIDATOR_REQUIRE()]}
//          errorText="Enter the name of the game this destination is featured in."
//          onInput={formHandler}    
//          />

//         <Input 
//         id="series" 
//         className="input-info"
        
//         element="input" 
//         type="select" 
//         label="Game Series" 
//         validators={[VALIDATOR_REQUIRE()]}
//          errorText="Select the series this game is from."
//          onInput={formHandler}    
//          />

         

//         <Button type="submit" 
//         disabled={!formState.isValid} 
//             //I can't figure out why this isn'tt working. I went through some tutorials and looked on StackOverflow, and it certainly appears as though everythins is coded correctly. Disabling for now, until I can fix.
//                 //Fixed. Typo. Still leaving this note in.
//         >Add Destination</Button>
//         </form>
//         </>
//         )
// };

// export default NewDestination

// const reducerForForm = (state, action) => {
//     switch (action.type) {
//         case 'INPUT_CHANGE':
//             let validForm = true;
//             for (const input in state.inputs) {
//                 if (input === action.input) {
//                     validForm = validForm && action.isValid;
//                 } else {
//                     validForm = validForm && state.inputs[input].isValid;
//                 }
//             }
//             return {
//                 ...state,
//                 inputs: {
//                     ...state.inputs,
//                     [action.input]: {value: action.value, isValid: action.isValid}
//                 },
//                 isValid: validForm
//             };
//         default: 
//             return state;
//     }
// };    


//     const [formState, dispatch] = useReducer(reducerForForm, {
//         inputs: 
        //     {
        //     destinationName: {
        //         value: '',
        //         isValid: false
        //     }, 
        //     headline: {
        //         value: '',
        //         isValid: false
        //     }, 
        //     game: {
        //         value: '',
        //         isValid: false
        //     }, 
        //     series: {
        //         value: '',
        //         isValid: false
        //     }, 
        // },
//         isValid: false
//         // isValid stores info if overall form is Valid. Inputs stores info on the validity of inputs.
//             //and this is initial state above.