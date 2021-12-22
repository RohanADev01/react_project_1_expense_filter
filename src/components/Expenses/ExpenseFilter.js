// import React, {useState} from "react";
import "./ExpenseFilter.css";

function ExpenseFilter(props) {
    // STORE IN STATE IN PARENT!! NOT CHILD!!
    // const [filterYear, setFilterYear] = useState();

    const dropdownChangeHandler = (event) => {
        // STORE IN STATE IN PARENT!! NOT CHILD!!
        // setFilterYear(event.target.value);
        console.log('in child');
        console.log(event.target.value);
        props.onChangeSelectedYear(event.target.value);
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;
