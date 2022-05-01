import React, { useEffect, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

import {
	questionSet1,
	questionSet2,
	questionSet3
} from '../../static/questionMock'

const Set1 = () => {
	const totalQuizLength =
		questionSet1.length + questionSet2.length + questionSet3.length
	const [isInProgress, setIsInProgress] = useState(true)
	const [count, counter] = useState(0)
	const [scoreBoard, setScoreBoard] = useState({
		correct: 0,
		wrong: 0
	})
	const [star, setStar] = useState(0)
	const [quizNums, setQuizNums] = useState(
		Math.floor(Math.random() * totalQuizLength + 1)
	)

	const starHandler = rate => {
		setStar(rate)
	}

	const returnToMenu = () => {
		window.location.href = '/menu'
	}

	const selectAnswersHandler = (answer, correct) => {
		if (answer === correct) {
			setScoreBoard({
				...scoreBoard,
				correct: scoreBoard.correct + 1
			})
		} else {
			setScoreBoard({
				...scoreBoard,
				wrong: scoreBoard.wrong + 1
			})
		}
		if (count < quizNums - 1) {
			counter(count + 1)
		} else {
			setIsInProgress(false)
		}
	}

	const questionBankGenerator = () => {
		const questionBank = [...questionSet1, ...questionSet2, ...questionSet3]
		const randomQuestionBank = []
		for (let i = 0; i < quizNums; i++) {
			const ran = Math.floor(Math.random() * (questionBank.length - i))
			randomQuestionBank.push(questionBank[ran])
			questionBank[ran] = questionBank[questionBank.length - i - 1]
		}
		return randomQuestionBank
	}

	const renderQuestionBank = () => {
		const quizSets = questionBankGenerator()
		let { question, answers, correct } = quizSets[count]
		return (
			<div>
				<p className="title"> {question}</p>
				{answers.map(answer => (
					<button
						className="button"
						onClick={() => selectAnswersHandler(answer, correct)}
					>
						{answer}
					</button>
				))}
			</div>
		)
	}

	const renderResult = () => {
		const isFailed = scoreBoard.correct / quizNums < 0.5
		{
			return isFailed ? renderFailed() : renderAllPass()
		}
	}

	const renderAllPass = () => {
		return (
			<div>
				<div id="menu"></div>
				<br></br>
				<p>Congratulations. You have passed the quiz </p>
				<p>
					Final Score is {scoreBoard.correct} out of {quizNums}{' '}
				</p>
				<br></br>
				<div className="App">
					<p>
						How accurate do you think this quiz has tested your research ability
						out of 5?
					</p>
					<Rating onClick={starHandler} ratingValue={star} />
				</div>

				<br></br>

				<p>
					{' '}
					<button className="button is-success is-light" onClick={returnToMenu}>
						Return to Menu{' '}
					</button>
				</p>
			</div>
		)
	}

	const renderFailed = () => {
		return (
			<div>
				<div id="menu"></div>
				<br></br>
				<p>Please revise and try again. </p>
				<p>
					Final Score is {scoreBoard.correct} out of {quizNums}{' '}
				</p>
				<br></br>
				<div className="App">
					<p>
						How accurate do you think this quiz has tested your research ability
						out of 5?
					</p>
					<Rating onClick={starHandler} ratingValue={star} />
				</div>

				<br></br>

				<p>
					{' '}
					<button className="button is-success is-light" onClick={returnToMenu}>
						Return to Menu{' '}
					</button>
				</p>
			</div>
		)
	}

	return (
		<div>
			<header>{`Total quiz: ${quizNums}`}</header>
			{isInProgress ? renderQuestionBank() : renderResult()}
		</div>
	)
}

export default Set1
