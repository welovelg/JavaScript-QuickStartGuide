// The URL to POST to
const url = "https://www.example.com"
const requestMethod = "POST"

// The JSON object to POST to the web server
const postData = {
	firstName: "Robert",
	email: "support@clydebankmedia.com"
}

// Make the POST request and return a promise
fetch(url, {
	method: requestMethod,
	headers: {
		"Content-Type": "application/json"
	},
	body: JSON.stringify(postData)
}).then(response => response.json())
.then(result => console.log(`POST was a success: ${result}`))
.catch(error => console.error(`An error occurred: ${error}`))
