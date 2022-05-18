import React, { useEffect, useState } from 'react'
import createQ1 from '../../components/services/createQuestion1'
import './question1.css'

const Question2 = () => {
	const [q1, setQ1] = useState('')
	const [q2, setQ2] = useState('')
	const [q3, setQ3] = useState('')
	const [q4, setQ4] = useState('')
	const [answer, setAnswer] = useState(['', '', '', ''])
	const [questionOne, setQuestionOne] = useState({
		question: '',
		correct: '',
		answers: []
	})

	const editQuestion = (value, type) => {
		setQuestionOne({
			...questionOne,
			[type]: value
		})
	}

	const submit = async () => {
		const answer = [q1, q2, q3, q4]
		const question = questionOne
		question.answers = answer
		const create = await createQ1.createQ2(question)
		console.log(create)
	}

	return (
		<div className="q1form">
			<div>
				<label>Question:</label>
				<input
					type="text"
					onChange={e => editQuestion(e.target.value, 'question')}
				/>
			</div>

			<div>Please fill up your options:</div>

			<div>
				<label>Option1:</label>
				<input type="text" onChange={e => setQ1(e.target.value)} />
			</div>
			<div>
				<label>Option2:</label>
				<input type="text" onChange={e => setQ2(e.target.value)} />
			</div>
			<div>
				<label>Option3:</label>
				<input type="text" onChange={e => setQ3(e.target.value)} />
			</div>
			<div>
				<label>Option4:</label>
				<input type="text" onChange={e => setQ4(e.target.value)} />
			</div>
			<div>
				<label>Correct answer:</label>
				<input
					type="text"
					onChange={e => editQuestion(e.target.value, 'correct')}
				/>
			</div>

			<button onClick={() => submit()}>Add</button>
		</div>
	)
}

export default Question2
