// Add item to cart
function addToCart(itemName, itemPrice, itemQnty) {
	// Create an object named item with details of product
	const item = {
		name: itemName,
		price: itemPrice,
		quantity: itemQnty
	}

	// Make POST request to the server
	fetch("/cart/add", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(item)
	})
	.then(response => response.json())
	.then(data => console.log(data))
	.catch((error) => {
		console.error(`An error occurred: ${error}`)
	})
}
