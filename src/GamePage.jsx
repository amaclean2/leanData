import React, { useState } from 'react'

const GamePage = () => {
	return (
		<div className="Game-Page flex-container">
			<div className="header">
				<h1>2048</h1>
				<div className="scores">
					<div className="score"><span>score</span>136</div>
					<div className="best"><span>best</span>136</div>
				</div>
			</div>
			<div className="info">
				Join the numbers and get to the <b>2048 tile!</b>
				<button>New Game</button>
			</div>
			<div className="game"></div>
			<div className="instructions">
				<span><b>How to play: </b>Use your arrow keys to move the tiles. When two tiles with the same number touch, they <b>merge into one!</b></span>
			</div>
			<div className="note">
				<span><b>note: </b>The game on <b className="unln">this site</b> is the original version of 2048. Apps for <b className="unln">iOS</b> and <b className="unln">Android</b> are also available. Other versions are derivates or fakes, and should be used with caution.</span>
			</div>
   		</div>
	)
}

export default GamePage