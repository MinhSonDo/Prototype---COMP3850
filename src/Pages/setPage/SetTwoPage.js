import { questionSet2 as QuestionSet2 } from '../../static/questionMock'
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

var arr = []
for (let i = 0; i < QuestionSet2.length; i++) {
	arr.push('Wrong')
}
var arr2 = []
for (let i = 0; i < QuestionSet2.length; i++) {
	arr2.push(' ' + (i + 1))
}

function Set2() {
	const [count, counter] = useState(0)
	const [text, setText] = useState('next')
	const [score, setScore] = useState(0)
	const [star, setStar] = useState(0)

	const starHandler = rate => {
		setStar(rate)
	}

	const nextClick = () => {
		if (count < QuestionSet2.length) {
			counter(count + 1)
			console.log(QuestionSet2.length)
			console.log(count)
		}

		if (count == QuestionSet2.length - 1) {
			setText('finish')
		}
	}
	const prevClick = () => {
		if (count > 0) {
			counter(count - 1)
			console.log(QuestionSet2.length)
			console.log(count)
		}
		if (count == QuestionSet2.length - 2) {
		} else {
			setText('next')
		}
	}

	const aClick = () => {
		if (QuestionSet2[count].answers[0] == QuestionSet2[count].correct) {
			setScore(score + 1)
			arr[count] = 'Correct'
		}
		nextClick()
	}
	const bClick = () => {
		console.log(QuestionSet2[count].answers[0])
		console.log(QuestionSet2[count].correct)
		if (QuestionSet2[count].answers[1] == QuestionSet2[count].correct) {
			console.log('working' + score)
			setScore(score + 1)
			console.log('working' + score)
			arr[count] = 'Correct'
		}
		console.log(arr[count])
		nextClick()
	}
	const cClick = () => {
		if (QuestionSet2[count].answers[2] == QuestionSet2[count].correct) {
			setScore(score + 1)
			arr[count] = 'Correct'
		}
		nextClick()
	}

	const dClick = () => {
		if (QuestionSet2[count].answers[3] == QuestionSet2[count].correct) {
			setScore(score + 1)
			arr[count] = 'Correct'
		}
		nextClick()
	}

	const returnToMenu = () => {
		window.location.href = '/menu'
	}

	if (count < QuestionSet2.length) {
		return (
			<div>
				<p className="title"> {QuestionSet2[count].question}</p>
				<div className="buttons is-centered">
					<p>
						<button className="button" onClick={aClick}>
							{QuestionSet2[count].answers[0]}{' '}
						</button>{' '}
					</p>
					<p>
						{' '}
						<button className="button" onClick={bClick}>
							{QuestionSet2[count].answers[1]}{' '}
						</button>{' '}
					</p>
					<p>
						{' '}
						<button className="button" onClick={cClick}>
							{' '}
							{QuestionSet2[count].answers[2]}{' '}
						</button>{' '}
					</p>
					<p>
						<button className="button" onClick={dClick}>
							{' '}
							{QuestionSet2[count].answers[3]}{' '}
						</button>{' '}
					</p>
				</div>

				<div className="buttons is-centered">
					<button className="button is-success is-light" onClick={prevClick}>
						{' '}
						Previous
					</button>
					<button className="button is-success is-light" onClick={nextClick}>
						{' '}
						{text}
					</button>
				</div>
			</div>
		)
	} else {
		if (score / QuestionSet2.length < 0.5) {
			return (
				<div>
					<div id="menu">
						{arr.map(user => (
							<p>{user}</p>
						))}
					</div>
					<br></br>
					<p>Please revise and try again. </p>
					<p>
						Final Score is {score} out of {QuestionSet2.length}{' '}
					</p>
					<br></br>
					<div className="App">
						<p>
							How accurate do you think this quiz has tested your research
							ability out of 5?
						</p>
						<Rating onClick={starHandler} ratingValue={star} />
					</div>

					<br></br>

					<p>
						{' '}
						<button
							className="button is-success is-light"
							onClick={returnToMenu}
						>
							Return to Menu{' '}
						</button>
					</p>
				</div>
			)
		} else {
			return (
				<div>
					<div id="menu">
						{arr.map(user => (
							<p>{user}</p>
						))}
					</div>
					<br></br>
					<p>Congratulations. You have passed the quiz </p>
					<p>
						Final Score is {score} out of {QuestionSet2.length}{' '}
					</p>
					<br></br>
					<div className="App">
						<p>
							How accurate do you think this quiz has tested your research
							ability out of 5?
						</p>
						<Rating onClick={starHandler} ratingValue={star} />
					</div>

					<br></br>

					<p>
						{' '}
						<button
							className="button is-success is-light"
							onClick={returnToMenu}
						>
							Return to Menu{' '}
						</button>
					</p>
				</div>
			)
		}
	}
}

export default Set2
