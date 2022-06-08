import React, { useEffect, useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import Set1Service from '../../components/services/GetSet1'
import Set2Service from '../../components/services/GetSet2'
import Set3Service from '../../components/services/GetSet3'
import { Link } from 'react-router-dom'
const Set1 = () => {
	const [questionSet1, setquestionSet1] = useState([])
	const [questionSet2, setquestionSet2] = useState([])
	const [questionSet3, setquestionSet3] = useState([])
	const [isInProgress, setIsInProgress] = useState(true)
	const [count, counter] = useState(0)
	const [scoreBoard, setScoreBoard] = useState({
		correct: 0,
		wrong: 0
	})
	const [star, setStar] = useState(0)
	const [quizNums, setQuizNums] = useState(0)
	const fetchQuestion = () => {
		const q1 = Set1Service.getSet1()
		const q2 = Set2Service.getSet2()
		const q3 = Set3Service.getSet3()
		Promise.all([q1, q2, q3]).then(res => {
			const length = res[0].length + res[1].length + res[2].length
			console.log(res[0])
			setquestionSet1(res[0])
			setquestionSet2(res[1])
			setquestionSet3(res[2])
			setQuizNums(Math.floor(Math.random() * length + 1))
		})
	}

	useEffect(() => {
		fetchQuestion()
	}, [])

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
		if (quizSets.length > 0) {
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
	}

	const renderResult = () => {
		const isFailed = scoreBoard.correct / quizNums < 0.5
		
			return isFailed ? renderFailed() : renderAllPass()
		
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
					{/* <button className="button is-success is-light" onClick={returnToMenu}>
						Return to Menu{' '}
					</button> */}
			<Link to="/menu">
				<button className="button"> Return to Menu </button>
			</Link>
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
					<Link to="/menu">
				<button className="button"> Return to Menu </button>
			</Link>
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
