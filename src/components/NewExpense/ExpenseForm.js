import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
	const [titleInput, setTitleInput] = useState("");
	const [amountInput, setAmountInput] = useState("");
	const [dateInput, setDateInput] = useState("");

	const titleInputChangeHandler = event => setTitleInput(event.target.value);
	const amountInputChangeHandler = event => setAmountInput(event.target.value);
	const dateInputChangeHandler = event => setDateInput(event.target.value);

	const submitHandler = event => {
		event.preventDefault();
		const expenseData = {
			title: titleInput,
			amount: +amountInput,
			date: new Date(dateInput),
		};

		props.onSaveExpense(expenseData);
		props.onFormSubmit();

		setTitleInput("");
		setAmountInput("");
		setDateInput("");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						onChange={titleInputChangeHandler}
						value={titleInput}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						onChange={amountInputChangeHandler}
						value={amountInput}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						onChange={dateInputChangeHandler}
						value={dateInput}
					/>
				</div>
				<div className="new-expense__actions">
					<button type="button" onClick={props.onCancel}>
						Cancel
					</button>
					<button type="submit">Add expense</button>
				</div>
			</div>
		</form>
	);
}
