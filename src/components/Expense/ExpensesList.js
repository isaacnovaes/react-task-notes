import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) {
	if (props.items.length === 0) {
		return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
	}

	return (
		<ul className="expenses-list">
			{props.items.map(expense => {
				return (
					<ExpenseItem
						key={expense.id}
						description={expense.title}
						price={expense.amount}
						date={expense.date}
					/>
				);
			})}
		</ul>
	);
}
