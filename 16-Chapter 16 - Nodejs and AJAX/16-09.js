const http = require("http")
const url = require("url")

const hostname = "127.0.0.1"
const port = 3000

// Initialize the cart
let cart = {}

const server = http.createServer((req, res) => {
	const parsedUrl = url.parse(req.url, true)

	switch(parsedUrl.pathname) {
		case "/":
			// Display the Home page
			res.writeHead(200, {"Content-Type": "text/html"})
			res.end("Home page contents.")
			break
		case "/about":
			// Display the About Us page
			res.writeHead(200, {"Content-Type": "text/html"})
			res.end("About Us page contents.")
			break
		case "/contact":
			// Display the Contact page
			res.writeHead(200, {"Content-Type": "text/html"})
			res.end("Contact Us page contents.")
			break
		case "/cart":
			// GET will return the cart contents
			if (req.method === "GET") {
				res.writeHead(200, {"Content-Type": "application/json"})
				res.end(JSON.stringify(cart))
			// POST will add an item to the cart
			} else if (req.method === "POST") {
				let body = ""
				req.on("data", chunk => {
					body += chunk.toString()
				})
				req.on("end", () => {
					const item = JSON.parse(body)

					// If a cart item with the same name already exists,
					// increment quantity. If not, add item to cart
					if (cart[item.name]) {
						cart[item.name].quantity += item.quantity
					} else {
						cart[item.name] = item
					}

					res.writeHead(200, {"Content-Type": "application/json"})
					res.end(JSON.stringify({success: true}))
				})
			} else {
				res.writeHead(405, {"Content-Type": "text/plain"})
				res.end("Method not allowed")
			}
			break
			default:
			// Display a 404 page (Page Not Found)
			res.writeHead(404, {"Content-Type": "text/html"})
			res.end("404 - Page Not Found.")
		}
})

// Start the server
server.listen(port, hostname, () => {
	console.log(`Node.js is listening at http://${hostname}:${port}/`)
})
