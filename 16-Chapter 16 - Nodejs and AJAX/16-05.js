const http = require("http")
const hostname = "127.0.0.1"
const port = 3000

const server = http.createServer((req, res) => {
	if (req.method === "POST") {
		let body = ""
		// Collect data chunks, adding each to the body string
		req.on("data", chunk => {
			body += chunk.toString()
		})

		// When end event fires, log the string and end the request
		req.on("end", () => {
			console.log(body)
res.end("OK")
		})
	}
})

// Start the server
server.listen(port, hostname, () => {
	console.log(`Node.js is listening at http://${hostname}:${port}/`)
})
