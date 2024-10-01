const validCardPattern = /^[3456]\d{14,15}$/

let cards = [
	"4123456789012345",
	"9630123484921205",
	"5155625609411234",
	"345141116111987",
	"6161515141413"
]

cards.forEach(function (card) {
	if (validCardPattern.test(card)) {
		console.log(card + " is valid.")
	}
})
