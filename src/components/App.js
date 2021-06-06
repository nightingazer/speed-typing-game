import React, { useEffect, useState } from "react"
import "../styles/App.scss"

function App() {
	const timer = 5
	const [text, setText] = useState("")
	const [timeRemaining, setTimeRemaining] = useState(timer)
	const [isTimeRunning, setIsTimeRunning] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			if (timeRemaining > 0 && isTimeRunning) {
				setTimeRemaining((time) => time - 1)
			} else {
				setIsTimeRunning(false)
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
	}

	function countWords() {
		const wordCount = text.split(" ").filter((word) => word.trim() !== "").length
		console.log(wordCount)
	}

	return (
		<div className="App">
			<h1>Speed Typing Game</h1>
			<textarea value={text} onChange={handleChange} />
			<h4>Time remaining: {timeRemaining}</h4>
			<button onClick={startGame}>Start</button>
			<h1> X Words</h1>
		</div>
	)
}

export default App
