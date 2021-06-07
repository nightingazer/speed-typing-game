import { useState, useEffect, useRef } from "react"

export default function useGameState(startingTime = 10) {
	const STARTING_TIME = startingTime

	const [text, setText] = useState("")
	const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
	const [isTimeRunning, setIsTimeRunning] = useState(false)
	const [wordCount, setWordCount] = useState(0)

	const inputRef = useRef(null)

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
		setTimeRemaining(STARTING_TIME)
		setText("")
		setWordCount(0)
		inputRef.current.disabled = false
		inputRef.current.focus()
	}

	function endGame() {
		setIsTimeRunning(false)
		setWordCount(countWords())
	}

	function countWords() {
		const numWords = text.split(" ").filter((word) => word.trim() !== "").length
		return numWords
	}

	return { inputRef, text, handleChange, isTimeRunning, timeRemaining, startGame, wordCount }
}
