function getCart() {
	// Make the HTTP request to the server via fetch
	fetch("/cart", { method: "GET" })
		.then(response => response.json())
		.then(data => console.log(data))
		.catch((error) => {
			console.error("An error occurred: ", error)
		})
}
