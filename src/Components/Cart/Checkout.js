import { useRef, useState } from "react";
import classes from "./Checkout.module.css";


const isEmpty = (value) => { return value.trim() === '' };
const isFivechar = value => value.trim().length === 5;

const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalCodeIsValid = isFivechar(enteredPostalCode);
        const enteredCityIsValid = !isEmpty(enteredCity);

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            postalCode: enteredPostalCodeIsValid,
            city: enteredCityIsValid
        });

        let formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalCodeIsValid && enteredCityIsValid;

        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            postalCode: enteredPostalCode,
            city: enteredCity
        })

    }

    const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`
    const streetControlClasses = `${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`
    const postalCodeControlClasses = `${classes.control} ${formInputsValidity.postalCode ? '' : classes.invalid}`
    const cityControlClasses = `${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`


    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={nameControlClasses}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" ref={nameInputRef} />
                {!formInputsValidity.name && <p>Please enter a valid name</p>}
            </div>
            <div className={streetControlClasses}>
                <label htmlFor="name">Street: </label>
                <input type="text" id="street" ref={streetInputRef} />
                {!formInputsValidity.street && <p>Please enter a valid name</p>}
            </div>
            <div className={postalCodeControlClasses}>
                <label htmlFor="name">Postal code: </label>
                <input type="text" id="postal" ref={postalCodeInputRef} />
                {!formInputsValidity.postalCode && <p>Please enter a valid Postal Code(5 Chars)</p>}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor="name">City: </label>
                <input type="text" id="city" ref={cityInputRef} />
                {!formInputsValidity.city && <p>Please enter a valid city</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;