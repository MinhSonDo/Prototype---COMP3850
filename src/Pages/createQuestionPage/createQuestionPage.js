import React from 'react'

const CreateQuestionPage = () => {
	return (
		<>
			<button onClick={() => (window.location.href = '/question1')}>
				Set1 "Multiple Choice"
			</button>
			<button>Set2</button>
			<button>Set3</button>
		</>
	)
}

export default CreateQuestionPage
