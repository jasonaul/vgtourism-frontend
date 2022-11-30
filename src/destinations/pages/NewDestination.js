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
                isValid: true
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


    // const submissionHandler = async event => {
    //     event.preventDefault();
    //     try {
    //         await sendRequest('http://localhost:5001/api/destinations', 'POST', JSON.stringify({
    //             destinationName: formState.inputs.destinationName.value,
    //             headline: formState.inputs.headline.value,
    //             game: formState.inputs.game.value,
    //             series: formState.inputs.series.value,
    //             city: formState.inputs.city.value,
    //             country: formState.inputs.country.value,
    //             creator: auth.userID
    //         },     {
    //             Authorization: 'Bearer ' + auth.token
    //           }),
    //         {
    //             'Content-Type': 'application/json'
    //         })
    //     } catch (err) {
            
    //     }
    // }





    const submissionHandler = async event => {
        event.preventDefault();
            //preventing the default of reloading the page before info can be sent and crashes the session...

    try {


        const headers = new Headers();
        headers.append('Authorization', 'Bearer ' + auth.token)
        headers.append('Content-Type', 'application/x-www-form-urlencoded')
        await sendRequest('http://localhost:5001/api/destinations', 'POST', new URLSearchParams({
            'destinationName': formState.inputs.destinationName.value,
            'headline': formState.inputs.headline.value,
            'game': formState.inputs.game.value,
            'series': formState.inputs.series.value,
            'city': formState.inputs.city.value,
            'country': formState.inputs.country.value,
            'description1': formState.inputs.description1.value,
            'description2': formState.inputs.description2.value,
            'description3': formState.inputs.description3.value,
            'image1': formState.inputs.image1.value,
            'image2': formState.inputs.image2.value,
            'ingameimg1': formState.inputs.ingameimg1.value,
            'ingameimg2': formState.inputs.ingameimg2.value,
            'creator': auth.userID,
        }), headers
        // {
        //     Authorization: 'Bearer ' + auth.token
        // }
        );
        alert("Destination added to your profile! You are now being redirected home.")
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

         

        <Input 
        id="description1" 
        className="input-info"
        
        element="textarea" 
        type="description1" 
        label="Introductory Paragraph - Describe the destination that inspired the video game asset." 
        validators={[VALIDATOR_REQUIRE()]}
         errorText="Please enter some text."
         onInput={formHandler}    
         />

        <Input 
        id="description2" 
        className="input-info"
        
        element="textarea" 
        type="description2" 
        label="Destination Paragraph - Describe the Destination" 
        validators={[VALIDATOR_REQUIRE()]}
         errorText="Please enter some text."
         onInput={formHandler}    
         />

        <Input 
        id="description3" 
        className="input-info"
        
        element="textarea" 
        type="description3" 
        label="Supporting Information paragraph" 
        validators={[VALIDATOR_REQUIRE()]}
         errorText="Please enter some text."
         onInput={formHandler}    
         />

        <Input 
        id="image1" 
        className="input-info"
        
        element="input" 
        type="image1" 
        label="Image of Destination" 
        validators={[VALIDATOR_REQUIRE()]}
         errorText="Provide an image link of the destination or attraction related to the game!"
         onInput={formHandler}    
         />

        <Input 
        id="image2" 
        className="input-info"
        
        element="input" 
        type="image2" 
        label="Image of Destination" 
        validators={[VALIDATOR_REQUIRE()]}
         errorText="Provide an image link of the destination or attraction related to the game!"
         onInput={formHandler}    
         />



        <Input 
        id="ingameimg1" 
        className="input-info"
        
        element="input" 
        type="ingameimg1" 
        label="In-Game Image (link to image)" 
        validators={[VALIDATOR_REQUIRE()]}
         errorText="Provide an in-game image that relates to this destination!"
         onInput={formHandler}    
         />

        <Input 
        id="ingameimg2" 
        className="input-info"
        
        element="input" 
        type="ingameimg2" 
        label="In-Game Image (link to image)" 
        validators={[VALIDATOR_REQUIRE()]}
         errorText="Provide another in-game image that relates to this destination!"
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