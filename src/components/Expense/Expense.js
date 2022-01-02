import Card from "../../Card";
import "./Expense.css";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

export default function Expense(props) {
	const [filterYear, setFilterYear] = useState("2021");

	const getFilterYear = year => {
		setFilterYear(year); // be careful with the update of this variable
	};

	const filteredExpenses = props.items.filter(expense => {
		return expense.date.getFullYear() === +filterYear;
	});

	return (
		<Card className="expenses">
			<ExpensesFilter initialYear={filterYear} onYearInput={getFilterYear} />
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList items={filteredExpenses} />
		</Card>
	);
}
