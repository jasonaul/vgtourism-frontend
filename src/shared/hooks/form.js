import React, { useCallback, useReducer } from 'react'
// useCallback to avoid an infinite loop between NewDestination.js and Input.js, for our form.


const reducerForForm = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let validForm = true;
            for (const inputID in state.inputs) {
                if (!state.inputs[inputID]) {
                    continue;
                }
                if (inputID === action.inputID) {
                    validForm = validForm && action.isValid;
                } else {
                    validForm = validForm && state.inputs[inputID].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputID]: { value: action.value, isValid: action.isValid }
                },
                isValid: validForm
            };

        case 'SET_DATA':
            console.log('set data', action);
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
        isValid: firstValidity
        // isValid stores info if overall form is Valid. Inputs stores info on the validity of inputs.
        //and this is initial state above.
    });

    const formHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'INPUT_CHANGE',
            value: value,
            isValid: isValid,
            inputID: id
        })
    }, []);

    const formDataSetter = useCallback((inputData, firstValidity) => {
        console.log('formDataSetter', inputData);
        dispatch({
            type: 'SET_DATA',
            inputs: inputData,
            validForm: firstValidity
        })
    }, []);

    return [formState, formHandler, formDataSetter];

};



export default useFormHook