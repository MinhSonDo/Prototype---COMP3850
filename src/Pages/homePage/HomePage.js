// import Menu from '../menuPage/MenuPage'
import { Link } from 'react-router-dom'




function Button() {

	return (
		<div className="buttons is-centered">
			<Link to="/login">
				<button className="button"> Log In </button>
			</Link>
			<Link to="/menu">
				<button className="button"> Start</button>
			</Link>


		</div>
	)







}

export default Button
