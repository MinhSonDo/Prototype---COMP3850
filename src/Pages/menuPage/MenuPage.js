import React from 'react'
import Wheel from '../../components/wheel'
// import temp from '../../components/wheel';

const setClick1 = () => {
	window.location.href = '/set1'
}
const setClick2 = () => {
	window.location.href = '/set2'
}
const setClick3 = () => {
	window.location.href = '/set3'
}

const random = () => {
	window.location.href = '/set1'
}

const places = ['Set1', 'Set2', 'Set3']

function Menu() {
	return (
		<div>
			{/* <div className="buttons has-addons is-centered">
				<button className="button" onClick={setClick1}>
					{' '}
					Set 1
				</button>
				<button className="button" onClick={setClick2}>
					{' '}
					Set 2
				</button>
				<button className="button" onClick={setClick3}>
					{' '}
					Set 3
				</button>
			</div> */}
			<p>Randomizer</p>

			<Wheel items={places} />
		</div>
	)
}

export default Menu
