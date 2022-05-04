import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routes from './routes'

import './App.css'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Suspense fallback={<div>fail page</div>}>
					<BrowserRouter>
						<Routes>
							{routes.map(routeConfig => {
								const { path, authorized } = routeConfig
								if (authorized) {
									// if some page required auth to process...
									return null
								}
								return <Route {...routeConfig} key={path} />
							})}
						</Routes>
					</BrowserRouter>
				</Suspense>
			</header>
		</div>
	)
}

export default App
