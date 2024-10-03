const http = require("http")
const url = require("url")

const hostname = "127.0.0.1"
const port = 3000

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
		default:
			// Display a 404 page (Page Not Found)
			res.writeHead(404, {"Content-Type": "text/html"})
			res.end("404 - Page Not Found.")
	}
})
