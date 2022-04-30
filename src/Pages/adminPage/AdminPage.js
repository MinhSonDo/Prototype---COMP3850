import React from 'react'
import { Link } from 'react-router-dom'

// Create, Edit, Review don't have any function after clicking for now
// Log Out will return to start page, for now it stay at beside those three button but the button will set at top right corner in the future.

function AdminPage() {
	return (
		<div className="buttons is-centered">
			<Link to="/createQuestion">
				<button className="button"> Create Question Sets </button>
			</Link>
			<Link to="/currentQuestion">
				<button className="button"> CurrentQuestionPage</button>
			</Link>

			<button className="button"> Edit Question Sets </button>
			<button className="button"> Review Scores </button>
			<Link to="/">
				<button className="button"> Log Out </button>
			</Link>
		</div>
	)
}

export default AdminPage
