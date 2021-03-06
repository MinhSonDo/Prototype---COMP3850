 //https://codesandbox.io/s/github/hadriengerard/spinning-wheel-game-react?file=/src/index.js:205-289

import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export let temp = null
const random = () => {
	window.location.href = '/set1'
	// console.log(temp)
	// if (temp == 0) window.location.href = '/set1'
	// if (temp == 1) window.location.href = '/set2'
	// if (temp == 2) window.location.href = '/set3'
}
export default class Wheel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedItem: null
		}
		this.selectItem = this.selectItem.bind(this)
	}

	selectItem() {
		if (this.state.selectedItem === null) {
			const selectedItem = Math.floor(Math.random() * this.props.items.length)
			if (this.props.onSelectItem) {
				this.props.onSelectItem(selectedItem)
			}
			this.setState({ selectedItem })
		} else {
			this.setState({ selectedItem: null })
			setTimeout(this.selectItem, 500)
		}
	}

	render() {
		const { selectedItem } = this.state
		const { items } = this.props
		if (selectedItem != null) {
			temp = selectedItem
			//  console.log(temp);
		}
		const wheelVars = {
			'--nb-item': items.length,
			'--selected-item': selectedItem
		}
		const spinning = selectedItem !== null ? 'spinning' : ''

		if (temp != null) {
			return (
				<div>
					<div className="wheel-container">
						<div
							className={`wheel ${spinning}`}
							style={wheelVars}
							onClick={this.selectItem}
						>
							{items.map((item, index) => (
								<div
									className="wheel-item"
									key={index}
									style={{ '--item-nb': index }}
								>
									{item}
								</div>
							))}
						</div>
					</div>
					<div className="random">
						{/* <button className="button" onClick={random}>
							{' '}
							Go
						</button> */}

                       <Link to="/set1">
				<button className="button"> Go </button>
			</Link>
					</div>
				</div>
			)
		} else {
			return (
				<div>
					<div className="wheel-container">
						<div
							className={`wheel ${spinning}`}
							style={wheelVars}
							onClick={this.selectItem}
						>
							{items.map((item, index) => (
								<div
									className="wheel-item"
									key={index}
									style={{ '--item-nb': index }}
								>
									{item}
								</div>
							))}
						</div>
					</div>
				</div>
			)
		}
	}
}
