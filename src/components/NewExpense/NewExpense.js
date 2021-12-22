import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

//  could also use function NewExpense {} etc. instead of arrow function!
const NewExpense = (props) => {
    // true or false state for whether we want to show form or now (when button is clicked)
    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const cancelEditingHandler = (isCancelled) => {
        if (isCancelled) {
            setIsEditing(false);
        };
    };

    const saveExpenseDataHandler = (enteredExpenseData) => {
        // just adding ID to distinguish console.log from child
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // all we need: (could just use enteredExpenseData instead of adding ID as well)
        console.log(expenseData);
        props.onAddExpense(expenseData);

        setIsEditing(false);
    };

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onCancelEditing={cancelEditingHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    );
};

export default NewExpense;