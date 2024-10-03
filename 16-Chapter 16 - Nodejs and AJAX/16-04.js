// Define the URL
const url = "https://www.myexamplewebserver.com"

// Example data to pass
const postData = {
	firstName: "Robert",
	email: "support@clydebankmedia.com"
}

// Make the request, passing the URL 
// and function to process the resulting data
$.post(url, postData, function(data) {
	// Successful, display response retrieved
	console.log(data)
}).fail(function(jqXHR, status, error) {
	// An error occurred
	console.log(`An error occurred: ${errorThrown}`)
}) 
