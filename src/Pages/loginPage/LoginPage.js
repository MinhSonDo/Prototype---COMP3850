import React from 'react'

const LoginClick = () => {
	window.location.href = '/adminPage'
}

function Login() {
	return (
		<div>
			<div>
				<span> Admin's Username: </span>
				<input type="text" />
			</div>

			<div>
				<span> Admin's Password: </span>
				<input type="password" />
			</div>

			<button className="button" onClick={LoginClick}>
				{' '}
				Login{' '}
			</button>
		</div>
	)
}

export default Login
