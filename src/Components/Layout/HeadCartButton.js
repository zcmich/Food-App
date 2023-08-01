import React from 'react';
import CartIcon from '../Cart/CartIcon';

import classes from './HeadCartButton.module.css'

const HeaderCartButton = (props) => {
    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>YOUR CART</span>
            <span className={classes.badge}>3</span>
        </button>

    )
};

export default HeaderCartButton;