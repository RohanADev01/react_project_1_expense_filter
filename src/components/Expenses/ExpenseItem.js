// import React, {useState} from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseCard from "../UI/ExpenseCard";

function ExpenseItem(props) {
    // const [title, setTitle] = useState(props.title)
    // const clickHandler = () => {
    //     setTitle('Updated!');
    //     // console.log(title);
    // };

    return (
        <li>
            <ExpenseCard className="expense-item">
                <ExpenseDate date={props.date}></ExpenseDate>
                <div className="expense-item__description">
                    {/* <h2>{title}</h2> */}
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                {/* <button onClick={clickHandler}>Change Title</button> */}
            </ExpenseCard>
        </li>
    );
}

export default ExpenseItem;
