let tickCount = 0

function incrementTicks() {
	tickCount += 1
	console.log(`There have been ${tickCount} ticks so far.`)
}

const interval = setInterval(incrementTicks, 1000)
