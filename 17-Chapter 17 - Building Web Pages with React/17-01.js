import React from "react"

const AlertButton = ({ alertMessage }) => {
	const handleClick = () => {
		alert(alertMessage)
	}

	return (
		<button onClick={handleClick}>
			Click Me
		</button>
	)
}

const Greeting = () => {
	return (
		<div>
			<AlertButton alertMessage="Hello, World!" />
		</div>
	)
}
