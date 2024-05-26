import Item from "./Item"
import { dayNames } from "../../data/data.js"

const Day = ({ day, dayIndex }) => {
	
	const currentDayName = dayNames[dayIndex];

	return (
		<div className="day">
			<h2>{currentDayName}</h2>

			{day.map(item => (
				<Item key={item.id} item={item} />
			))}

			<div className="controls">
				<button> Ny uppgift </button>
			</div>
		</div>
	)
}

export default Day