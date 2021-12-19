// import logo from './logo.svg';
// import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
    const expenses_data = [
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
            date: new Date(2021, 5, 9),
        },
        {
            id: "e3",
            title: "Apple product",
            amount: 69.00,
            date: new Date(2021, 6, 3),
        },
        {
            id: "e4",
            title: "Comp2",
            amount: 1659,
            date: new Date(2021, 1, 19),
        },
    ];

    const addExpenseHandler = (expense) => {
        console.log('In App.js:');
        console.log(expense);
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses_data}></Expenses>
        </div>
    );
}

export default App;
