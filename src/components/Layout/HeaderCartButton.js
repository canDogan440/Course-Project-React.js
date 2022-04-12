import { useContext, useEffect, useState } from "react";

import CartContext from "../../store/cart-contex";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighligthted, setBtnHighlighted] = useState(false);

  const cartContext = useContext(CartContext);

  const { items } = cartContext;

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighligthted ? classes.bump : ""
  } `;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlighted(true);
    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems} </span>
    </button>
  );
};

export default HeaderCartButton;
