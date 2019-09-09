import React, { useState } from 'react'
import './App.scss'
import LandingPage from './LandingPage'
import GamePage from './GamePage'

const App = () => {
	const [page, setPage] = useState("landing")

	const renderPage = (page === "landing")
		? <LandingPage />
		: <GamePage />

	return (
		<div className="App">
			<div className="selector">
				<label>
					<input
						onChange={() => setPage("landing")}
						type="radio"
						name="selector"
						value="landing"
						checked={page === "landing"} />
					<span>Landing</span>
				</label>
				<label>
					<input
						onChange={() => setPage("game")}
						type="radio"
						name="selector"
						value="game"
						checked={page === "game"} />
					<span>Game</span>
				</label>
			</div>
			{renderPage}
		</div>
	);
}

export default App
