import React from 'react'

const CreateQuestionPage = () => {
	return (
		<>
			<button onClick={() => (window.location.href = '/question1')}>
				Set1 "Multiple Choice"
			</button>
			<button onClick={() => (window.location.href = '/question2')}>
				Set2
			</button>
			<button onClick={() => (window.location.href = '/question3')}>
				{' '}
				Set3
			</button>
		</>
	)
}

export default CreateQuestionPage
