import { useState } from "react";

const useBasicInput = (validate) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [valueIsTouched, setValueIsTouched] = useState(false);

    const valueChangeHandler = (e) => {
        console.log(e.target.value)
        setEnteredValue(e.target.value)
    }
    const valueBlurHandler = () => {
        setValueIsTouched(true);
    }

    const valueIsValid = validate(enteredValue);

    const valueIsInvalid = !valueIsValid && valueIsTouched;

    const valueStyle = valueIsInvalid ? 'form-control invalid' : 'form-control';

    const reset = () => {
        setEnteredValue('');
        setValueIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        isInValid: valueIsInvalid,
        valueStyle,
        valueChangeHandler,
        valueBlurHandler,
        reset
    }

}

export default useBasicInput;