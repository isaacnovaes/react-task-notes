import "./ExpenseDate.css"
    
export default function ExpenseDate(props) {
	const month = props.date.toLocaleString("en-US", { month: "long" });
	const day = props.date.toLocaleString("en-US", { day: "numeric" });
	return (
		<div className="expense-date">
			<span className="expense-date__month">{month}</span>
			<span className="expense-date__day">{day}</span>
			<span className="expense-date__year">{props.date.getFullYear()}</span>
		</div>
	);
}
