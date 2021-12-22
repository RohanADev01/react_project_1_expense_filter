// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_expenses = [
    {
        id: "e1",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2020, 2, 28),
    },
    {
        id: "e2",
        title: "Medial Indurance",
        amount: 24.99,
        date: new Date(2020, 5, 9),
    },
    {
        id: "e3",
        title: "Apple product",
        amount: 69.0,
        date: new Date(2022, 6, 3),
    },
    {
        id: "e4",
        title: "Comp2",
        amount: 1659,
        date: new Date(2021, 1, 19),
    }
];

function App() {
    const [expenseData, setExpenseData] = useState(dummy_expenses);

    const addExpenseHandler = (expense) => {
        // console.log('In App.js:');
        // console.log(expense);
        setExpenseData((prevExpenseData) => {
            return [expense, ...prevExpenseData];
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenseData}></Expenses>
        </div>
    );
}

export default App;
