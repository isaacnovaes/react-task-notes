import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

export default function NewExpense(props) {
	const [showInputs, setShowInputs] = useState(false);

	const saveExpenseDataHandler = childData => {
		const expenseData = {
			...childData,
			id: Math.random().toString(),
		};
		props.onNewExpense(expenseData);
		setShowInputs(false);
	};

	const showExpenseInputsHandler = () => {
		setShowInputs(true);
	};

	const hideExpenseInputsHandler = () => {
		setShowInputs(false);
	};

	const content = showInputs ? (
		<div className="new-expense">
			<ExpenseForm
				onSaveExpense={saveExpenseDataHandler}
				onFormSubmit={hideExpenseInputsHandler}
				onCancel={hideExpenseInputsHandler}
			/>
			{/* <button type="button" onClick={showExpenseInputsHandler}>
				Add expense
			</button> */}
		</div>
	) : (
		<div className="new-expense">
			{/* <ExpenseForm onSaveExpense={saveExpenseDataHandler} /> */}
			<button type="button" onClick={showExpenseInputsHandler}>
				Add New Expense
			</button>
		</div>
	);

	// now implement the other functionally. If form is submitted, setShowInputs(false)

	return <div>{content}</div>;
}
