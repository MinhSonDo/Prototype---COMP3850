import React from 'react'

const ReturnClick = () => {
	window.location.href = '/'
}

function Tutorial() {
	return (
		<div>
            <p> Welcome to Quizzical tutoral session </p>

            <p> 1. Click on the randomizer to get any question set to answer. </p>
            <p> 2. Answer each question with no time limit pressure. </p>
            <p> 3. Submit the question answers using the submit button. </p>
            <p> 4. Remember to leave a feedback for us. </p>

            <p> Thank you! </p>

            <button onClick={ReturnClick}> Return To Main Page </button>
		</div>
	)
}

export default Tutorial