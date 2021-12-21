import React from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

//  could also use function NewExpense {} etc. instead of arrow function!
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        // just adding ID to distinguish console.log from child
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // all we need: (could just use enteredExpenseData instead of adding ID as well)
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
};

export default NewExpense;