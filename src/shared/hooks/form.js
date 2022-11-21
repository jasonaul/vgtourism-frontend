import React, { useCallback, useReducer } from 'react'
    // useCallback to avoid an infinite loop between NewDestination.js and Input.js, for our form.


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

        case 'SET_DATA':
            return {
                inputs: action.inputs,
                isValid: action.validForm
            }
        default: 
            return state;
    }
};  

const useFormHook = (firstInputs, firstValidity) => {
    const [formState, dispatch] = useReducer(reducerForForm, {
        inputs: firstInputs,
        isValid: false
        // isValid stores info if overall form is Valid. Inputs stores info on the validity of inputs.
            //and this is initial state above.
    });

const formHandler = useCallback((id, value, isValid) => {
    dispatch({
        type: 'INPUT_CHANGE', 
        value: value, 
        isValid: isValid, 
        input: id
    })
}, []);

    const formDataSetter = useCallback((inputData, firstValidity) => {
        dispatch({
            type: 'SET_DATA',
            inputs: inputData,
            validForm: firstValidity
        })
    }, []);

    return [formState, formHandler, formDataSetter];

};



export default useFormHook