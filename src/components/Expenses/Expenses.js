import React, {useState} from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseCard from "../UI/ExpenseCard";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2021');

    const filteredItemsArray = props.items.filter(item => {
        // console.log(item.date.getFullYear().toString(), filterYear);
        return item.date.getFullYear().toString() === filterYear;
    });

    const expenseItemsArray = filteredItemsArray.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>);

    const changeSelectedYearHandler = (selectedYear) => {
        setFilterYear(selectedYear);
        console.log("in parent");
        console.log(selectedYear);
        console.log(filterYear);
    };

    let expensesContent = expenseItemsArray;
    if (filteredItemsArray.length === 0) {
        expensesContent = <p>No expenses found.</p>;
    };
    
    return (
        <div>
            <ExpenseCard className="expenses">
                <ExpenseFilter
                    selected={filterYear}
                    onChangeSelectedYear={changeSelectedYearHandler}
                />
                {expensesContent}
                {/* <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date}
                ></ExpenseItem> */}
            </ExpenseCard>
        </div>
    );
}

export default Expenses;
