import React, { useEffect, useRef, useState } from "react"
import useGameState from "../hooks/useGameState"
import "../styles/App.scss"

function App() {
	const { inputRef, text, handleChange, isTimeRunning, timeRemaining, startGame, wordCount } =
		useGameState(3)

	return (
		<div className="App">
			<h1>Speed Typing Game</h1>
			<textarea
				ref={inputRef}
				value={text}
				onChange={handleChange}
				disabled={!isTimeRunning}
			/>
			<h4>Time remaining: {timeRemaining}</h4>
			<button onClick={startGame} disabled={isTimeRunning}>
				Start
			</button>
			<h1>Word count: {wordCount}</h1>
		</div>
	)
}

export default App
