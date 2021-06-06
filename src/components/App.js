import React, { useEffect, useState } from "react"
import "../styles/App.scss"

function App() {
	const timer = 3

	const [text, setText] = useState("")
	const [timeRemaining, setTimeRemaining] = useState(timer)
	const [isTimeRunning, setIsTimeRunning] = useState(false)
	const [wordCount, setWordCount] = useState(0)

	useEffect(() => {
		setTimeout(() => {
			if (timeRemaining > 0 && isTimeRunning) {
				setTimeRemaining((time) => time - 1)
			} else {
				endGame()
			}
		}, 1000)
	}, [timeRemaining, isTimeRunning])

	function handleChange(e) {
		const { value } = e.target
		setText(value)
	}

	function startGame() {
		setIsTimeRunning(true)
		setTimeRemaining(timer)
		setText("")
		setWordCount(0)
	}

	function endGame() {
		setIsTimeRunning(false)
		setWordCount(countWords())
	}

	function countWords() {
		const numWords = text.split(" ").filter((word) => word.trim() !== "").length
		return numWords
	}

	return (
		<div className="App">
			<h1>Speed Typing Game</h1>
			<textarea value={text} onChange={handleChange} />
			<h4>Time remaining: {timeRemaining}</h4>
			<button onClick={startGame}>Start</button>
			<h1>Word count: {wordCount}</h1>
		</div>
	)
}

export default App
