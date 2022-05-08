import React, { useEffect, useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import Set1Service from '../../components/services/GetSet1'
import Set2Service from '../../components/services/GetSet2'
import Set3Service from '../../components/services/GetSet3'
// import {
// 	questionSet1,
// 	questionSet2,
// 	questionSet3
// } from '../../static/questionMock'






const Set1 = () => {
	const [questionSet1, setquestionSet1] = useState(null)
    const [questionSet2, setquestionSet2] = useState(null)
	const [questionSet3, setquestionSet3] = useState(null)
  
	useEffect(() => {
	console.log('effect')
	Set1Service
		.getSet1()
		.then(set1 => {
			setquestionSet1(set1)
			console.log(set1)
		})
		.catch(error => {
			console.log("Error:", error.response.data)
		})

	})


   


	useEffect(() => {
	Set2Service
		.getSet2()
		.then(set2 => {
			setquestionSet2(set2)
			console.log(set2)
		})
		.catch(error => {
			console.log("Error:", error.response.data)
		})

	})

	useEffect(() => {
	console.log('effect')
	Set3Service
		.getSet3()
		.then(set3 => {
			setquestionSet3(set3)
			console.log(set3)
		})
		.catch(error => {
			console.log("Error:", error.response.data)
		})
	})
	
	

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
