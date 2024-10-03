// The URL to request
const url = "https://javascript.clydebankmedia.com/hello"

fetch(url).then(response => {
	if (response.ok) {
		// Request was successful, now the response object
		// is populated. The promises response.json() and 
		// response.text() are available.
		const textPromise = response.text()
		const jsonPromise = response.json() 
		return Promise.all([textPromise, jsonPromise])
	} else {
		// The request failed.
		throw new Error("The request encountered an error.")
	}
}).then(([text, json]) => {
	// text and json now have actual data and are ready for use
	console.log("Text response: ", text)
	console.log("JSON response: ", json)
}).catch(error => console.error("An error occurred: ", error))
