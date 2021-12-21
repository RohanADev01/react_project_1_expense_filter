import React, { useState } from "react";

import "./Expenses.css";
// import ExpenseItem from "./ExpenseItem";
import ExpenseCard from "../UI/ExpenseCard";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [filterYear, setFilterYear] = useState("2021");

    const changeSelectedYearHandler = (selectedYear) => {
        setFilterYear(selectedYear);
        console.log("in parent");
        console.log(selectedYear);
        console.log(filterYear);
    };

    const filteredItemsArray = props.items.filter((item) => {
        // console.log(item.date.getFullYear().toString(), filterYear);
        return item.date.getFullYear().toString() === filterYear;
    });

    return (
        <div>
            <ExpenseCard className="expenses">
                <ExpenseFilter
                    selected={filterYear}
                    onChangeSelectedYear={changeSelectedYearHandler}
                />
                {/* {expensesContent} */}
                <ExpensesList filteredExpenses={filteredItemsArray} />
            </ExpenseCard>
        </div>
    );
}

export default Expenses;
