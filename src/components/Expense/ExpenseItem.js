import Card from "../../Card";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{props.description}</h2>
				<div className="expense-item__price">€{props.price}</div>
			</div>
		</Card>
	);
}
