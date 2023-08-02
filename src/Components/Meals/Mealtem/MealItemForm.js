import React from "react";

import classes from './MealItemForm.module.css'
import Input from "../../UI/input";


const MealItemForm = (props) => {
    return (
        <form className={classes.form}>
            <Input label="Amount" input={{
                id: 'amount_' + props.id,
                type:"number",
                min:"1",
                max:"100",
                step:"1",
                defaultValue:"11"
                }}/>
            <button>+ Add</button>
        </form>

    )
};

export default MealItemForm;