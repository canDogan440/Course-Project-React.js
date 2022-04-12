import classes from "./MealItemForm.module.css";
import {useRef, useState} from "react";
import Input from "../../UI/Input";

const MealItemForm = (props) => {

  const[amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = parseFloat(amountInputRef.current.value);

    if(enteredAmount === 0 || enteredAmount < 1) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        input={{
          id: "c" + props.id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
        label="Amount"
        ref={amountInputRef}
      />
      <button>Add +</button>
      {!amountIsValid && <div className={classes.error}>Please enter a valid amount</div>}
    </form>
  );
};
export default MealItemForm;
