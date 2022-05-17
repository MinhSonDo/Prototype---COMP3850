import React, { useState } from 'react'
import './question1.css'

const Question1 = () => {
	const [questionOne, setQuestionOne] = useState({
		question: '',
		answers: [],
		correct: ''
	})

	const editQuestion = (value, type) => {
		setQuestionOne({
			...questionOne
		})
	}
	return (
		<div className="q1form">
			<div>
				<label>Question:</label>
				<input type="text" />
			</div>

			<div>Please fill up your options:</div>

			<div>
				<label>Option1:</label>
				<input type="text" />
			</div>
			<div>
				<label>Option2:</label>
				<input type="text" />
			</div>
			<div>
				<label>Option3:</label>
				<input type="text" />
			</div>
			<div>
				<label>Option4:</label>
				<input type="text" />
			</div>
			<div>
				<label>Correct answer:</label>
				<input type="text" />
			</div>

			<button>Add</button>
		</div>
	)
}

export default Question1
