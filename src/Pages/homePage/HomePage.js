// import Menu from '../menuPage/MenuPage'

const Login = () => {
	window.location.href = '/login'
}

const Click = () => {
	if (window.confirm('Do you want to do a tutorial?')) {
		window.location.href = '/tutorial'
	} else {
		window.location.href = '/menu'
	}
}
function Button() {
	return (
		<div className="buttons is-centered">
			<button className="button" onClick={Click}>
				Start{' '}
			</button>
			<button className="button" onClick={Login}>
				{' '}
				Log In{' '}
			</button>
			{/* <button class="button">Admin </button> */}
		</div>
	)
}

export default Button
