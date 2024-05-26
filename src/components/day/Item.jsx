import { useState } from "react"
import { useStore } from "../../data/store"

const Item = ({ item }) => {
	let itemClass = ''
	if( item.done ) itemClass += 'done'
	if( item.late ) itemClass += 'due'

	const toggleTodo = useStore(state => state.toggleTodo)
	const removeTodo = useStore(state => state.removeTodo)
	const editTodo = useStore(state => state.editTodo)

	const [isEditing, setIsEditing] = useState(false)
	const [newText, setNewText] = useState(item.text)

	const handleChange = () => { 
		toggleTodo(item.id) 
	}

	const handleRemove = () => {
		removeTodo(item.id)
	}

	const handleEdit = () => {
		setIsEditing(true)
	}

	const handleSave = () => {
		editTodo(item.id, newText)
		setIsEditing(false)
	}

	const handleInputChange = (e) => {
		setNewText(e.target.value)
	}

	return (
		<div className="item">
			<input type="checkbox" checked={item.done} onChange={handleChange} />
			{isEditing ? (
				<input type="text" value={newText} onChange={handleInputChange} onBlur={handleSave} />
			) : (
				<label className={itemClass} onClick={handleChange}>
					{item.text}
				</label>
			)}
			{/* <span title="Snooza">💤</span> */}
			<span title="Ändra" onClick={handleEdit}>✍️</span>
			<button data-cy="remove" title="Ta bort" onClick={handleRemove}>🗑️</button>
		</div>
	)
}

export default Item