import {useContext} from 'react';

import CartIcon from '../Cart/CartIcon';
import classes from './HeadCartButton.module.css'
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
    const cardCtx = useContext(CartContext);

    const numberOfCartItems = cardCtx.items.reduce((curNumber, item) =>{
        return curNumber + item.amount;
    }, 0)

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>YOUR CART</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>

    )
};

export default HeaderCartButton;