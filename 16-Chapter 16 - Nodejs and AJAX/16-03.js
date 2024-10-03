// Define the URL
const url = "https://www.example.com"

// Make the request, passing the URL 
// and function to process the resulting data
$.get(url, function(data) {
	// Successful, display data retrieved
	console.log(data)
}).fail(function(jqXHR, textStatus, errorThrown) {
	// An error occurred
	console.log(`An error occurred: ${errorThrown}`)
})
